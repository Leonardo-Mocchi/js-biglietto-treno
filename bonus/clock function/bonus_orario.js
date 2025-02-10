/* quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date. */

function stimulationNeeded() {

    const displayTime = new Date()

    const timeNow = ('0' + displayTime.getHours()).slice(-2) + ":" + ('0' + displayTime.getMinutes()).slice(-2) + ":" + ('0' + displayTime.getSeconds()).slice(-2) + "." + ('00' + displayTime.getMilliseconds()).slice(-3);
    console.log(timeNow);

    const time2NextHour = (60 - displayTime.getMinutes()) + ":" + (60 - displayTime.getSeconds()) + "." + (1000 - displayTime.getMilliseconds())
    console.log(time2NextHour);

    alert("Alla prossima ora manca: " + time2NextHour)
} setInterval(stimulationNeeded, 5000)
