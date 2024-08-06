const form = document.getElementById('form');
const result = document.getElementById('result');
const sendIcon = document.getElementById( 'sendIcon' );
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  sendIcon.style.display = 'none';
  result.innerHTML = "Please wait...";
  result.style.color = "yellow";
    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Thanks For Contact Me";
                result.style.color = "green";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            result.innerHTML = "Something went wrong!";
            result.style.color = "red";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                sendIcon.style.display = 'block';
                result.innerHTML = "Send Message";
                result.style.color = "#d0b45f";
            }, 3000);
        });
});