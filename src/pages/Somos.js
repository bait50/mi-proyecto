import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const integrantes = [
    
    {
        nombre: 'Hermis Julian Arias',
        descripcion: 'Desarrollador Frontend apasionado por la tecnología y la innovación.',
        imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png' // Imagen de Riolu
    },
    {
        nombre: 'Dario Restrepo Landazury',
        descripcion: 'Desarrollador Backend con interés en el desarrollo de aplicaciones complejas.',
        imagen:  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png' // Imagen de Oshawott
    },
    {
        nombre: 'Michael Stwar Murillo Ruiz',
        descripcion: 'Desarrollador Full Stack con pasión por crear soluciones innovadoras.',
        imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' // Imagen de Pikachu
    },
    {
        nombre: 'Malcom Jesid Riascos Figueroa',
        descripcion: 'Desarrollador de software especializado en soluciones tecnológicas.',
        imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' // Imagen de Squirtle
    },
    {
        nombre: 'Raul Daniel Ararat León',
        descripcion: 'Desarrollador innovador enfocado en crear soluciones eficientes.',
        imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' // Imagen de Charizard
    },
    {
        nombre: 'Sarly Samira Naranjo Tello',
        descripcion: 'Desarrolladora creativa con enfoque en experiencia de usuario.',
        imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' // Imagen de Eevee
    }
];

const Somos = () => (
    <aside className="bg-primary text-white text-center py-3">
        <h2>Quienes Somos</h2>
        <CardGroup>
            {integrantes.map((integrante, index) => (
                <Card key={index} className="m-3" style={{ minWidth: '200px' }}>
                    <Card.Img variant="top" src={integrante.imagen} alt={integrante.nombre} />
                    <Card.Body>
                        <Card.Title>{integrante.nombre}</Card.Title>
                        <Card.Text>{integrante.descripcion}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
        <p className="text-justify mt-4">
            Somos un grupo entusiasta de estudiantes de programación que estamos en constante formación y aprendizaje. Nuestro objetivo con este proyecto es no solo demostrar nuestras habilidades adquiridas en el mundo del desarrollo web, sino también compartir nuestra pasión por la tecnología y la innovación. Hemos decidido crear esta página como un escaparate de nuestros conocimientos, donde exploramos diferentes aspectos de la programación, desde el diseño de interfaces hasta el desarrollo de aplicaciones complejas. Además, compartimos un interés común por el fascinante universo de los Pokémon, lo que nos ha inspirado a integrar elementos de esta temática en nuestro proyecto. Creemos que la programación es una herramienta poderosa que nos permite dar vida a nuestras ideas y transformar la manera en que interactuamos con la tecnología, y estamos emocionados de continuar este viaje de aprendizaje juntos.
        </p>
    </aside>
);

export default Somos;
