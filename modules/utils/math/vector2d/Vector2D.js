export default class Vector2D
{
    constructor(x = 0, y = x)
    {
        this.__x = x
        this.__y = y
        this.__typeof = 'Vector2D'
    }
    
    toString()
    {
        return `(${this.__x.toFixed(2)}, ${this.__y.toFixed(2)})`
    }

    get X()
    {
        return this.__x
    }

    get Y()
    {
        return this.__y
    }

    get TypeOf()
    {
        return this.__typeof
    }

    set X(x)
    {
        this.__x = x
    }

    set Y(y)
    {
        this.__y = y
    }
    
    /**
     * 
     * @param  {...Vector2D} vectors 
     */
    static sum(...vectors)
    {
        const vec = new Vector2D()

        for(const vector of vectors)
        {
            vec.X += vector.X
            vec.Y += vector.Y
        }
    
        return vec
    }

    /**
     * 
     * @param  {...Vector2D} vectors 
     */
    static sub(...vectors)
    {

        if(!vectors.length)
        {
            throw new Error('')
        }

        let vec = new Vector2D()
            vec = Vector2D.copy(vectors[0])

        for(let i = 1; i < vectors.length; i++)
        {
            vec.X -= vectors[i].X
            vec.Y -= vectors[i].Y
        }
    
        return vec
    }

    /**
     * 
     * @param {Vector2D} vector 
     */
    static magnitude(vector)
    {
        return Math.round( Math.sqrt( (vector.X ** 2) + (vector.Y ** 2) ) )
    }

    /**
     * 
     * @param {Vector2D} vector 
     * @param {Number | Vector2D} factorX 
     * @param {Number} factorY 
     */
    static scale(vector, factor, factorY = factor)
    {
 
        let vec = Vector2D.copy(vector)

        if(factor?.TypeOf === 'Vector2D')
        {
            vec.X *= factor.X
            vec.Y *= factor.Y
            return vec
        }
        
        vec.X *= factor
        vec.Y *= factorY
        
        return vec
    }

    /**
     * 
     * @param {Vector2D} vector 
     */
    static normalize(vector)
    {
        const vec = Vector2D.copy(vector)
        const magnitude = Vector2D.magnitude(vector)

        vec.X /= magnitude
        vec.Y /= magnitude

        return vec
    }

    /**
     * 
     * @param {Vector2D} vector 
     */
    static copy(vector)
    {
        return new Vector2D(vector.X, vector.Y)
    }
}