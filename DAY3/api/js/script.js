fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data) => {
  data.forEach((country) => {
    const flag = country.flags.svg;
    console.log(flag);
  });
})
.catch((error) => console.log("Error fetching data:", error));
