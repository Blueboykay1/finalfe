<template>
  <body>

<h3>Contact Form</h3>

<div class="contact">
  <form action="https://formspree.io/f/mjvjqbeg" method="post">
    <label for="fname">Full Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="email">E-Mail</label>
    <input type="email" id="email" name="email" placeholder="Your email address..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">UKRAINE</option>

      <option value="australia">RUSSIA</option>
      <option value="canada">UGANDA</option>
      <option value="usa">CHINA</option>


      <option value="australia">Australasia</option>
      <option value="canada">EGYPT</option>
      <option value="usa">MALI</option>


      <option value="australia">SA</option>
      <option value="canada">ZIMBABWE</option>
      <option value="usa">NIGERIA</option>

    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>

</body>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    },
    methods: {
        handleSubmit(){
            fetch('https://capstone-proj-back-end.herokuapp.com/users/login'),{
                method: 'POST',
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    subject: this.subject
                })
            }
        }
    }

}
</script>

<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.contact {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>