class ball
{

    constructor(x,y,r)
    {
        //add elasticidade
        var ball_options = 
        {
            restitution: 0.4,
            friction: 0.02
        }

        this.body = Bodies.circle(x,y,r); 
        //raio dessa classe
        this.r = r;
        World.add(world, this.body);
    }


    //display, show
    show()
    {
        var pos = this.body.position;
        ellipse(pos.x, pos.y, this.r);

    }


}