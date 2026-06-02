const chartBetween = (link: string): void => {
    let doc: HTMLElement = document.body;

    fetch(link)
      .then((response: Response) => {
        response.text().then((text: string) => {
          let block: HTMLDivElement = document.createElement("div");

          block.innerHTML = text;

          doc.append(block);

          let element: NodeListOf<HTMLElement> = document.querySelectorAll("[data-value]");

          let arrayValue: number[] = [];
          console.log(element);

          for (let i = 0; i < element.length; i++) {
              arrayValue.push(Number(element[i].title));
          }

          console.log(arrayValue);
        });
      })
      .catch((e: Error) => console.log(e));
};
<div>
Энергетические уровни

Вы работаете ученым на атомной электростанции. Известно, что количество энергии, вырабатываемое реактором в каждый момент времени, равно какому-либо значению из конечного множества возможных значений. У вас для исследования есть столбчатая диаграмма с результатом замеров уровня энергии реактора в течение дня в различные моменты времени. Тщательно изучив данные, вы обнаруживаете аномалию: между двумя соседними по значению уровнями энергии слишком большой разрыв. Необходимо разобраться в чем может быть дело.
</div>

chartBetween("https://yastatic.net/s3/school/files/18e50d01-1671-40c5-b730-552c952aced1/upload.html");

export default chartBetween;