<script>
                const Main = document.querySelector('.main')
                const Mainclose = document.querySelector('.Close')
                const Button = document.querySelector('.button')
        
                function ShowInformation(){
                    Main.classList.add('open')
                }
                function HideInformation(){
                    Main.classList.remove('open')
                }
        
                Button.addEventListener('click',ShowInformation)
                Mainclose.addEventListener('click',HideInformation)
            </script>