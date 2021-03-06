import {Vector} from '../types'

export class Ball {
  private speed: Vector;
  private ballImage: HTMLImageElement = new Image();

  constructor(
    private ballSize: number,
    private position: Vector,
    speed: number,
    image: string,
  ) {
    this.ballSize = ballSize;
    this.position = position;
    this.speed = {
      x: speed,
      y: -speed
    };
    this.ballImage.src = image;
  }

  // Getters
  // width = height cause the ball's image is actually a square
  get width(): number {
    return this.ballSize;
  }   
  
  get height(): number {
    return this.ballSize;
  }   

  get pos(): Vector {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.ballImage;
  }

  // Methods
  changeYDirection(): void {
    this.speed.y = -this.speed.y
  }
 
  changeXDirection(): void {
    this.speed.x = -this.speed.x
  }

  moveBall(): void {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y
  }
}