import { Actor } from '../../character/mod.js'
import sortAliens from '../../utils/sort/sortAliens.js'
import { Vector2D } from '../../../modules/mod.js'
/**
 * Creates and configures alien 'Actors'
 */
export default function generateAliens()
{
    let aliens= []
    let score = 10
    const COLL = 12
    const ROWS = 6

    const coord = {x: 0, y: 0}
    const coordSprite = {x: 0, y: 0}


    let row = 0
    while(++row <= ROWS)
    {
        const emeny = []
        const margin= 2
        const spaceBetween = 30

        coord.x = 0

        let coll = 0
        while(++coll <= COLL)
        {
            const alien = new Actor('Alien')

                // SETTING EMENY:ALIEN
                alien.Position = new Vector2D(
                    coord.x * margin, 
                    coord.y * margin + spaceBetween
                )
                alien.Width  = 8
                alien.Height = 8
                alien.Score = score
                alien.Speed = new Vector2D(1, 0)
                alien.Sense = new Vector2D(1, 0)

                // Sprite mapping: sprite 1
                alien.addCoordSprite
                (
                    {
                        x: coordSprite.x * 2,
                        y: coordSprite.y
                    },
                    8
                )
                // Sprite mapping: sprite 2
                alien.addCoordSprite
                (
                    {
                        x: (row * 16 - 8),
                        y: coordSprite.y
                    },
                    8
                )

            emeny.push(alien)

            coord.x += 8

        }

        coord.y += 8
        coordSprite.x += 8

        score += 5
        aliens.push([...emeny])
    }

    return aliens.flat().sort( sortAliens )
}