window.addEventListener("load", () => {
    setTimeout(() => {
      const loadScreen = document.getElementById("loadingScreen");
      loadScreen.style.display = "none";
      loadScreen.style.height = "0";
      document.getElementById("spinner").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    }, 3500);
});
const passwordViewBtn = document.getElementById("viewToggler");
const passwordIcon = document.getElementById("posi");
const password = document.getElementById("floatingPassword");

passwordViewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(password.type == "password"){
        password.setAttribute("type", "text");
        passwordIcon.textContent = "visibility_off";
    }else {
        password.setAttribute("type", "password");
        passwordIcon.textContent = "visibility";
    }
});


const typewriter2 = document.getElementById("typewriter2");
const text2 = "Sorry, you are not registered for this Quiz."
let idx = 0;
function type2writer(){
    if(text2.length > idx){
        typewriter2.innerText = text2.substring(0, idx + 1);
        idx++;
        setTimeout(type2writer, 90);
    }
}

// validation of input

const login = document.getElementById("subAction");

login.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("floatingInput");
    const password = document.getElementById("floatingPassword");
    const feedback = document.getElementById("tellUser");
    const notAuser = document.getElementById("notAuser");
    if(username.value == "" || username.value == null || username.value == undefined){
        feedback.style.display = "block"
        feedback.textContent = "**User Name is Required!!";
        username.focus();
    }else if(password.value == "" || password.value == undefined || password.value == null) {
        feedback.style.display = "block"
        feedback.textContent = "**Password is Required!!";
        password.focus();
    }else {

        function checkUsername() {
            for(let mem of membersInfo) {
                if(mem.name == username.value){
                    return {
                        result: true,
                        content: mem 
                    };
                }
            };
            return {
                result: false,
                content: null
            };
        }
            
        function checkPassword(){
            for(let mem of membersInfo) {
                if(mem.password == password.value){
                    return {
                        result: true,
                        content: mem
                    };
                }
            };
            return {
                result: false,
                content: null
            };
        }
        let student = checkUsername();
        let pass = checkPassword();
        // console.log(student.result +" -- "+ pass.result);
        
        function runAnime(x, y){
            setTimeout(() => {
                x.style.opacity = "1";
                x.style.transform = "translateY(0)";
              }, y);
        }

        function signUp() {
            notAuser.style.display = "block"
            setTimeout(() => {
                document.getElementById("loadingScreen2").classList.add("rm-hwm");
                document.getElementById("spinner").classList.add("rm-hwm");
                document.getElementById("login").style.display = "none";
                document.getElementById("notaUserContent").style.display = "flex";
                const introh4 = document.querySelector(".not-Info h4");
                const introp = document.querySelector(".not-Info p");
                const sinform = document.getElementById("sinform");
                type2writer();
                runAnime(introh4, 5000);
                runAnime(introp, 7800);
                runAnime(sinform, 13000);
            }, 1200);
        }

        function success(student) {
            const body = document.querySelector("body");
            const combotron = document.getElementById("aUser");
            const sucImg = document.getElementById("sucImg");
            const sucH1 = document.getElementById("sucH1");
            const sucP = document.getElementById("sucP");
            const sucIn = document.getElementById("sucIn");
            const sucinP = document.getElementById("sucinP");
            const sucB = document.querySelector(".sucB");
            const sucUl = document.getElementById("sucUl");

            body.style.visibility = "hidden"
            combotron.style.display = "block"; 
            combotron.style.visibility = "visible"
            sucH1.textContent = `Hello comrade ${student.name}`;
            runAnime(sucImg, 800);
            runAnime(sucH1, 1500);
            runAnime(sucP, 3000);
            runAnime(sucIn, 5000);
            runAnime(sucinP, 7000);
            runAnime(sucUl, 10000);
            runAnime(sucB, 14000);
            
           
            sucB.addEventListener("click", (e) => {
                e.preventDefault();
                body.style.visibility = "visible";
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Baba if you never ready no confirm oooo!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, start quiz!'
                }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Last Chance!!!!',
                        "If you sha ready, click the button below to start... Don't worry the quiz no go too hard like that.",
                        'warning'
                      )
                      document.querySelector(".swal2-confirm").addEventListener("click", (evt) => {
                        evt.preventDefault();
                        
                        const userInfo = {
                            name: student.name,
                            userID: student.id,
                        };
                        localStorage.setItem("userInfo", JSON.stringify(userInfo));
                        window.location.href = "action.html"; 
                    });
                    }
                });
                
            });
        }


        function report(field) {
            feedback.style.display = "block";
            feedback.textContent = `**Incorrect ${field.placeholder} !!`;
            field.focus();
        }
        
        if(!student.result){ 
            if(pass.result){
                report(username);
            }else {
                // signUp();
                alert("You do not have an account with us");
            }
        }else if(!pass.result){
            if(student.result) {
                report(password);
            }else{
                // signUp();
                alert("You do not have an account with us");
            }
        }else{
            if(student.content.name === username.value && student.content.password === password.value){
                // console.log(`${student.content.password} === ${password.value}`);
                success(student.content);
            }else {
                if(student.content.name === username.value && password.value !== student.content.password){
                    report(password);
                }else if(student.content.name !== username.value && student.content.passsword === password.value){
                    report(username);
                }
            }
        }
        
    }
});
// localStorage.clear();
