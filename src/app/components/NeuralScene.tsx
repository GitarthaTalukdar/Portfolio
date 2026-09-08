"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function Network() {
  const groupRef = useRef<THREE.Group>(null)

  const nodeCount = 50
  const maxDistance = 3

  const { pointGeometry, lineGeometry } = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3)
    const nodes: THREE.Vector3[] = []
    const lineArray: number[] = []

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 14 + 6   // right shift
      const y = (Math.random() - 0.5) * 8
      const z = (Math.random() - 0.5) * 8

      positions.set([x, y, z], i * 3)
      nodes.push(new THREE.Vector3(x, y, z))
    }

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDistance) {
          lineArray.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          )
        }
      }
    }

    const pointGeometry = new THREE.BufferGeometry()
    pointGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    )

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(lineArray), 3)
    )

    return { pointGeometry, lineGeometry }
  }, [])

  // ONE smooth animation cell
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto rotation
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.rotation.x += delta * 0.04

      // Floating effect
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.4
    }
  })

  return (
    <group ref={groupRef}>
      {/* Glowing Blue Points */}
      <points geometry={pointGeometry}>
        <pointsMaterial
          size={0.15}
          color="#00eaff"
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Glowing Blue Lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#1e90ff"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}

export default function NeuralNetwork() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [6, 0, 12] }}>
        <ambientLight intensity={1.8} />
        <Network />
      </Canvas>
    </div>
  )
}
