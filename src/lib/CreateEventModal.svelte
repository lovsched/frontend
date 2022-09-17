<script>
    let shown = false;
    export function show() {
        shown = true;
    }

    export function hide() {

    }
</script>

<style>

.form {
  background-color: #303030;
  border-radius: 20px;
  box-sizing: border-box;
  height: 600px;
  padding: 20px;
  width: 320px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic2 {
  margin-top: 20px;
}

.input {
  background-color: #1a1a1a;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #303030;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 105px;
}

.cut-medium {
    width: 65px;
}

.cut-mail {
    width: 50px;
}

.cut-short {
  width: 40px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: white;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: white;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.btn {
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin: auto;
  margin-top: 30px;
  text-align: center;
}

</style>

    <div class="form">
      <div class="input-container">
        <input id="event-name" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="event-name" class="placeholder">Naslov Dogodka</label>
      </div>
      <div class="input-container ic2">
        <input id="location" class="input" type="text" placeholder=" " />
        <div class="cut cut-medium"></div>
        <label for="location" class="placeholder">Lokacija</label>
      </div>
      <div class="input-container ic2">
        <input id="name" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="name" class="placeholder">Ime in Priimek</label>
      </div>
      <div class="input-container ic2">
        <input id="phone" class="input" type="text" placeholder=" " />
        <div class="cut cut-medium"></div>
        <label for="phone" class="placeholder">Telefon</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-mail"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input id="attendees" class="input" type="text" placeholder=" " />
        <div class="cut cut-medium"></div>
        <label for="attendees" class="placeholder">Št. oseb</label>
      </div>
      <div class="input-container ic2">
        <input id="date" class="input" type="date" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="date" class="placeholder">Čas</label>
      </div>

      <button type="submit" class="btn ">Potrdi</button>
      <button class="btn ">Zapri</button>
    </div>
