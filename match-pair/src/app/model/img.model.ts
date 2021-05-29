export class imgLotr{
  constructor(
    public picId: number,
    public urlName: string,
    public state: 'default' | 'flipped' | 'matched',
    ){

  }
}
