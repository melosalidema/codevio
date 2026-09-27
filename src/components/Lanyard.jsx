/* eslint-disable react/no-unknown-property */
'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import StaggeredMenu from './StaggeredMenu';
import Grainient from './Grainient';
import { NAV_ITEMS, PAGE_THEME, SOCIAL_ITEMS } from '../data/site';

import cardGLB from '../assets/card.glb?url';
import lanyard from '../assets/codevio_strip1.png';
import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import * as THREE from 'three';
import './Lanyard.css';

gsap.registerPlugin(ScrollTrigger);
extend({ MeshLineGeometry, MeshLineMaterial });

const isFiniteVec3 = (v) =>
  Boolean(v) && Number.isFinite(v.x) && Number.isFinite(v.y) && Number.isFinite(v.z);

function SplitWord({ text, className = '' }) {
  return (
    <span
      className={`lanyard-deco__word ${className}`}
      style={{ display: 'block', overflow: 'hidden' }}
    >
      <span className="char" style={{ display: 'inline-block' }}>
        {text}
      </span>
    </span>
  );
}

export default function Lanyard({
  position = [0, 0, 20],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  textVisible = undefined,
}) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );
  const [active, setActive] = useState(false);
  const [spinning, setSpinning] = useState(true);

  const wrapperRef = useRef(null);
  const leftDecoRef = useRef(null);
  const rightDecoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (textVisible === undefined) {
      const t = setTimeout(() => setActive(true), 300);
      return () => clearTimeout(t);
    }

    if (textVisible) setActive(true);
  }, [textVisible]);

  useEffect(() => {
    if (!active) return;

    const t = setTimeout(() => setSpinning(false), 4000);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const leftChars = leftDecoRef.current?.querySelectorAll('.char') ?? [];
    const rightChars = rightDecoRef.current?.querySelectorAll('.char') ?? [];
    const allChars = [...leftChars, ...rightChars];

    if (!wrapper || !allChars.length) return;

    gsap.set(allChars, {
      opacity: 0,
      yPercent: 40,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: '+=250',
        scrub: 0.6,
      },
    });

    tl.to(allChars, {
      opacity: 1,
      yPercent: 0,
      ease: 'power2.out',
      stagger: 0.06,
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="pixelblast-bg">
        <Grainient
          color1={PAGE_THEME.backgroundColor}
          color2={PAGE_THEME.gradientColors[1]}
          color3={PAGE_THEME.gradientColors[2]}
          timeSpeed={0.2}
          warpStrength={1.2}
          warpFrequency={4.5}
          warpSpeed={1.8}
          warpAmplitude={60}
          blendAngle={15}
          blendSoftness={0.08}
          rotationAmount={400}
          noiseScale={2.5}
          grainAmount={0.08}
          grainAnimated={true}
          contrast={1.4}
          saturation={1.1}
          zoom={0.9}
        />
      </div>

      <div ref={wrapperRef} className="lanyard-scroll-wrapper">
        <div className="lanyard-sticky">
          <div className="lanyard-nav lanyard-nav--fixed">
            <StaggeredMenu
              position="right"
              items={NAV_ITEMS}
              socialItems={SOCIAL_ITEMS}
              displaySocials={true}
              logoUrl={logo}
              logoOpenUrl={logoAlt}
              displayItemNumbering={true}
              colors={PAGE_THEME.menuColors}
              menuButtonColor={PAGE_THEME.menuButtonColor}
              openMenuButtonColor={PAGE_THEME.openMenuButtonColor}
              menuTextColor={PAGE_THEME.menuTextColor}
              menuHoverColor={PAGE_THEME.menuHoverColor}
              accentColor={PAGE_THEME.accentColor}
              closeOnClickAway={true}
              isFixed={false}
            />
          </div>

          <div className="lanyard-deco lanyard-deco--left" ref={leftDecoRef}>
            <SplitWord text="WEBSITES" className="lanyard-deco__word--outlined" />
            <SplitWord text="MARKETING" className="lanyard-deco__word--ghost" />
            <SplitWord text="BRANDING" className="lanyard-deco__word--solid" />
          </div>

          <div className="lanyard-wrapper">
            <div className="lanyard-deco lanyard-deco--right" ref={rightDecoRef} />

            <Canvas
              camera={{ position, fov }}
              dpr={[1, isMobile ? 1.5 : 2]}
              gl={{ alpha: transparent }}
              onCreated={({ gl }) =>
                gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
              }
            >
              <ambientLight intensity={Math.PI} />

              <Physics
                gravity={active ? gravity : [0, 0, 0]}
                timeStep={isMobile ? 1 / 30 : 1 / 60}
              >
                <Band isMobile={isMobile} active={active} spinning={spinning} />
              </Physics>

              <Environment blur={0.75}>
                <Lightformer
                  intensity={2}
                  color="white"
                  position={[0, -1, 5]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={3}
                  color="white"
                  position={[-1, -1, 1]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={3}
                  color="white"
                  position={[1, 1, 1]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={10}
                  color="white"
                  position={[-10, 0, 14]}
                  rotation={[0, Math.PI / 2, Math.PI / 3]}
                  scale={[100, 10, 1]}
                />
              </Environment>
            </Canvas>
          </div>

          <div className="lanyard-textbox">
            ENGINEERING DIGITAL EXCELLENCE. TRANSFORMING VISIONS INTO POWERFUL,
            LASTING BRAND EXPERIENCES.
          </div>
          <div className="lanyard-desktop-note">
  Desktop view supports dragging
</div>
        </div>
      </div>
    </>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false, active, spinning }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyard);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ]);
  useRopeJoint(j1, j2, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ]);
  useRopeJoint(j2, j3, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  const releaseCard = e => {
    if (e?.target?.hasPointerCapture?.(e.pointerId)) {
      e.target.releasePointerCapture(e.pointerId);
    }

    drag(false);
  };

  useEffect(() => {
    if (hovered && !isMobile) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';

      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged, isMobile]);

  useFrame((state, delta) => {
    if (dragged && !isMobile) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());

      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach(ref => {
        const body = ref.current;
        if (!body) return;

        const translation = body.translation();
        if (!body.lerped || !isFiniteVec3(body.lerped)) {
          body.lerped = new THREE.Vector3().copy(translation);
        }

        if (!isFiniteVec3(translation)) return;

        const clampedDistance = Math.max(
          0.1,
          Math.min(1, body.lerped.distanceTo(translation))
        );

        body.lerped.lerp(
          translation,
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      const j1Body = j1.current;
      const j2Body = j2.current;
      const j3Body = j3.current;
      const cardBody = card.current;

      if (
        j1Body?.lerped &&
        isFiniteVec3(j1Body.lerped) &&
        isFiniteVec3(j2Body?.lerped) &&
        isFiniteVec3(j3Body?.translation()) &&
        isFiniteVec3(fixed.current.translation())
      ) {
        curve.points[0].copy(j3Body.translation());
        curve.points[1].copy(j2Body.lerped);
        curve.points[2].copy(j1Body.lerped);
        curve.points[3].copy(fixed.current.translation());

        if (band.current?.geometry) {
          const points = curve.getPoints(isMobile ? 16 : 32);
          if (points.every(isFiniteVec3)) {
            band.current.geometry.setPoints(points);
          }
        }
      }

      if (cardBody) {
        ang.copy(cardBody.angvel());
        rot.copy(cardBody.rotation());

        if (spinning) {
          cardBody.setAngvel({ x: ang.x, y: 1.5, z: ang.z });
        } else if (active) {
          const facingFront = Math.cos(rot.y) > 0.999;
          cardBody.setAngvel({
            x: ang.x,
            y: facingFront ? 0 : 1.2,
            z: ang.z,
          });
        }
      }
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />

        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 6, 0]}
          ref={card}
          {...segmentProps}
          type={dragged && !isMobile ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={isMobile ? undefined : () => hover(true)}
            onPointerOut={isMobile ? undefined : () => hover(false)}
            onPointerUp={isMobile ? undefined : releaseCard}
            onPointerCancel={isMobile ? undefined : releaseCard}
            onLostPointerCapture={isMobile ? undefined : releaseCard}
            onPointerDown={
              isMobile
                ? undefined
                : e => {
                    e.stopPropagation();
                    e.target.setPointerCapture(e.pointerId);

                    drag(
                      new THREE.Vector3()
                        .copy(e.point)
                        .sub(vec.copy(card.current.translation()))
                    );
                  }
            }
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>

            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />

            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(cardGLB);