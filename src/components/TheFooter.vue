<template>
    <footer class="flex-container10 bg-dark">
        <div class="flex-item10 mx-auto">
            <p id="Frase">
                "La Tecnología no es nada. Lo importante es que tengas fe en la gente, 
                que sean básicamente buenas e inteligentes, y si les das herramientas, 
                harán cosas maravillosas con ellas". <br> Steve Jobs
            </p>           
        </div>
            <div class="flex-item12">
                <p>
                    Visita nuestro GitHub:<br>
                    <a class="git" href="https://github.com/oscarcontrerasnavas/semana-1-10.git">Repositorio Front End</a><br>
                    <a class="git" href="https://github.com/oscarcontrerasnavas/semana-1-10.git">Repositorio Back End</a>
                </p> 
            </div>

        <div class="flex-item11">
            <ul>
                <p>CONTACTANOS !</p>
                <li>Cristian Navarro - cristiannl.0117@gmail.com</li>
                <li>Julio Vásquez - julio_nel1998_16@utp.edu.co</li>
                <li>William Prieto - wprietovelandia@gmail.com</li>
                <li>Oscar Contreras - oscarcontrerasnavas@gmail.com</li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
    .flex-container10 {
    align-items: center;
    background-color: var(--bg-color);
    color: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    }

    .flex-item10{
    border-bottom: whitesmoke 1px solid;
    padding: 1rem;
    text-align: center;
    }

    .flex-item11{
    border-left: 1px solid whitesmoke;
    height: auto;
    padding-top: 1rem;
    width: 50%;
    }

    .flex-item12{
    width: 50%;
    }

    .flex-item11 li {
    list-style: none;
    }

    a {
        color: whitesmoke;
    }

    
</style>