import React, {
  CanvasHTMLAttributes,
  FC,
  useCallback,
  useEffect,
  useRef,
} from 'react';

interface IParticles extends CanvasHTMLAttributes<HTMLCanvasElement> {
  particlesCount?: number;
  particlesSize?: number;
  particlesVelocity?: number;
}

type ParticleProps = {
  velocity: number;
  size: number;
  ctx: CanvasRenderingContext2D;
};

class Particle {
  size: number;
  velocityX: number;
  velocityY: number;
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;

  constructor({ velocity, size, ctx }: ParticleProps) {
    this.ctx = ctx;
    this.size = size;
    this.x = Math.random() * ctx.canvas.width;
    this.y = 0;
    this.velocityX = Math.random() * (velocity * 2) - velocity;
    this.velocityY = Math.random() * (velocity * 2) + velocity;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = '#00A080';
    this.ctx.fill();
  }

  updatePosition() {
    this.x += this.velocityX;
    if (this.x > this.ctx.canvas.width || this.x < 0) {
      this.x = Math.random() * this.ctx.canvas.width;
    }

    this.y += this.velocityY;
    if (this.y > this.ctx.canvas.height || this.y < 0) {
      this.y = this.size;
    }
  }
}

const Particles: FC<IParticles> = ({
  particlesCount = 50,
  particlesVelocity = 2,
  particlesSize = 2,
  width = '100%',
  height = '100%',
  ...props
}) => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  const getWidth = useCallback(() => {
    if (typeof width === 'number') return width;
    return (innerWidth / 100) * parseInt(width);
  }, [width]);

  const getHeight = useCallback(() => {
    if (typeof height === 'number') return height;
    return (innerHeight / 100) * parseInt(height);
  }, [height]);

  useEffect(() => {
    const particles: Particle[] = [];

    const canvas = canvasRef.current!;
    canvas.width = getWidth();
    canvas.height = getHeight();

    window.onresize = () => {
      canvas.width = getWidth();
      canvas.height = getHeight();
    };
    const ctx = canvas.getContext('2d')!;

    let reqId = 0;

    const loop = () => {
      reqId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.draw();
        particle.updatePosition();
      }
    };

    const main = () => {
      for (let i = 0; i < particlesCount; i++) {
        particles.push(
          new Particle({
            velocity: particlesVelocity,
            ctx,
            size: particlesSize,
          }),
        );
      }
      loop();
    };

    main();

    return () => {
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <canvas
      {...props}
      ref={canvasRef}
      width={getWidth()}
      height={getHeight()}
    />
  );
};

export default Particles;
