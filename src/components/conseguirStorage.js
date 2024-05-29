
export const conseguirStorage = () => {
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    return elementos;
}
