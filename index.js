fetch("data.json")
  .then(data => data.json())
  .then(res => {
    const statsList = document.getElementById("bars-days")
    statsList.classList.add("flex", "center", "justify");
    for (let stat of res) {
      const container = document.createElement("div");
      statsList.appendChild(container);
      container.classList.add("container", "flex", "column");

      const barContainer = document.createElement("div");
      barContainer.classList.add("barContainer", "flex", "justify");
      container.appendChild(barContainer);

      const bar = document.createElement("div")
      barContainer.appendChild(bar)
      bar.classList.add("bar")
      bar.setAttribute("data-barStat", "$" + stat.amount)
      bar.style.height = 2  * stat.amount + "px"


      const dayLabel = document.createElement("div")
      container.appendChild(dayLabel)
      dayLabel.classList.add("day")
      dayLabel.innerText = stat.day

      barContainer.style.height = "100%";
      barHeight = stat.amount * 2;


      if (barHeight > 100) {
        bar.setAttribute("id", "max")
      }
    }
  })