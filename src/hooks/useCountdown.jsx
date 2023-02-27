import { useState } from "react";

const useCountdown = (date) => {
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()


   const countdown = () => {
     //recebendo a data passada por parametro e transformando em milisegundos
     const countDate = new Date(date).getTime();
     const currentDate = new Date().getTime()
 
     const timeLeft = countDate - currentDate;
 
     //transformando as unidades em milesegundos
     const second = 1000;
     const minute = second * 60;
     const hour = minute * 60;
     const day = hour * 24;
 
     //retornando apenas os números inteiro
     const dayNumber = Math.floor(timeLeft / day)
     //retorna a sobra da divisão timeLeft / day e depois divide por hora
     const hourNumber = Math.floor((timeLeft % day) / hour)
     //retorna a sobra da divisão timeLeft / hour e depois divide por minuto
     const minuteNumber = Math.floor((timeLeft % hour) / minute)
     //retorna a sobra da divisão timeLeft / minute e depois divide por segundos
     const secondNumber = Math.floor((timeLeft % minute) / second)

     setDay(dayNumber)
     setHour(hourNumber)
     setMinute(minuteNumber)
     setSecond(secondNumber)

    }

    setInterval(countdown, 1000)

    return [day, hour, minute, second];
}

export default useCountdown;