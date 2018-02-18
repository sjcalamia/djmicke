import { Element as Elm } from '../../node_modules/@polymer/polymer/polymer-element.js'

export default ((template_string, style) => {
  let __template = `
    <style>${style}</style>
    ${template_string}
  `
  class DjmickeInfo extends Elm {
    static get template() { return __template }

  }
  customElements.define("djmicke-info",DjmickeInfo)
  return DjmickeInfo
})(`
<article class="nutrition-info">
  <header>
    <h1>Nutrition Facts</h1>
    <section class="servings">
      <h3 class="per-container">12 servings per container</h3>
      <h2 class="size"><span class="label">Serving size</span><span class="amt">1 (20g)</span></h2>
    </section>
  </header>
  <section class="amtpersrv">
    <h4 class="title">Amount per serving</h4>
    <h2 class="calories"><span class="label">Calories</span><span class="amount">90</span></h2>
  </section>
  <section class="dailyvalue">
    <h4 class="title">% Daily Value*</h4>
    <ul class="nutrients primary">
      <li class="fat">
        <span class="label">Total Fat</span>
        <span class="weight">7g</span>
        <span class="pdv">9</span>
        <ul class="secondary">
          <li class="saturated">
            <span class="label">Saturated Fat</span>
            <span class="weight">1g</span>
            <span class="pdv">5</span>
          </li>
          <li class="trans">
            <span class="label"><em>Trans</em> Fat</span>
            <span class="weight">0g</span>
          </li>
        </ul>
      </li>
      <li class="cholesterol">
        <span class="label">Cholesterol</span>
        <span class="weight">0mg</span>
        <span class="pdv">0</span>
      </li>
      <li class="sodium">
        <span class="label">Sodium</span>
        <span class="weight">0mg</span>
        <span class="pdv">0</span>
      </li>
      <li class="carbohydrate">
        <span class="label">Total Carbohydrate</span>
        <span class="weight">7g</span>
        <span class="pdv">3</span>
        <ul class="secondary">
          <li class="fiber">
            <span class="label">Dietary Fiber</span>
            <span class="weight">2g</span>
            <span class="pdv">7</span>
          </li>
          <li class="sugars">
            <span class="label">Total Sugars</span>
            <span class="weight">4g</span>
            <ul class="tertiary">
              <li class="added">
                <span class="label">Includes <span class="weight">3g</span> Added Sugars</span>
                <span class="pdv">6</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="protein">
        <span class="label">Protein</span>
        <span class="weight">3g</span>
      </li>
    </ul>
    <ul class="vitamins primary">
      <li class="vitamin-d">
        <span class="label">Vitamin D</span>
        <span class="weight">0mcg</span>
        <span class="pdv">0</span>
      </li>
      <li class="calcium">
        <span class="label">Calcium</span>
        <span class="weight">25mg</span>
        <span class="pdv">2</span>
      </li>
      <li class="iron">
        <span class="label">Iron</span>
        <span class="weight">1mg</span>
        <span class="pdv">6</span>
      </li>
      <li class="potassium">
        <span class="label">Potassium</span>
        <span class="weight">60mg</span>
        <span class="pdv">2</span>
      </li>
    </ul>
    <footer class="footnotes">
      <p class="dv_footnote">*The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
    </footer>
  </section>
</article>`,`
article,div,span,h1,h2,h3,h4,h5,h6 { padding: 0; margin: 0; }
.nutrition-info {
  width: 30vw;
  font-size: 2.83vw;
  font-family: Helvetica, "Franklin Gothic", Arial, sans-serif;
  margin: 1vw;
  padding: 1vw;
  border: .05vw solid currentColor;
}
header { border-bottom: .4em solid currentColor; }
header h1 { margin-top: -.2em; }
section { border-top: 1px solid currentColor; }
.servings .per-container {
  font-size: .69em;
  font-weight: normal;
}
.servings {
  padding-bottom: .25em;
}
.servings .size {
  font-size: .685em;
  font-weight: 700;
}
.servings .size .amt {
  float: right;
}
.amtpersrv {
  padding-top: .07em;
  border-bottom: .5vw solid currentColor;
}
.amtpersrv .title { font-size: .55em; }
.amtpersrv .calories {
  font-size: 1.1em;
}
.amtpersrv .calories .label {
  line-height: 1.05em;
  font-size: 1em;
}
.amtpersrv .calories .amount {
  font-size: 1.4em;
  float: right;
  position: relative;
  top: -.275em;
}
.dailyvalue .title {
  width: 100%;
  text-align: right;
  font-size: .6em;
  position: relative;
  right: -2.9em;
  line-height: 1.3em;
}
ul,li {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
}
li { padding-top: .1em; }

ul.primary {
  font-size: 1.75vw;
}
ul.nutrients.primary {
  border-bottom: .75em solid currentColor;
  padding-bottom: 0;
  margin-bottom: 0;
}
ul.vitamins.primary {
  border-bottom: .6vw solid currentColor;
}
ul.vitamins.primary li:first-of-type {
  border-top: none;
}
ul li {
  border-top: 0.1px solid currentColor;
  margin: .1em 0;
  line-height: 1.3em;
}
ul li ul li {
  padding-left: 1.25em;
}
ul li ul li ul li {
  padding-left: 0;
  margin-left: 1.15em;
  font-size: .97em;
}
ul li .label { font-weight: 700; }
ul li ul li > .label { font-weight: 500; }
.vitamins li > .label { font-weight: 500; }
.weight {
  font-weight: normal;
}
.pdv {
  float: right;
  font-weight: 700;
}
.vitamins .pdv {
  font-weight: normal;
}
.pdv::after {
  content: "%";
}
footer.footnotes {
  font-size: 1.15vw;
  padding-top: 0px;
  margin-top: -1em;
}
`)
