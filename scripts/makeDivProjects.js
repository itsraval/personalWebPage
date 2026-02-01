var emptyRow = {
    'bgImgID':``,
    'gitURL':``,
    'title':``,
    'description':``,
    'languages':``,
    'date':``
}

// bgImgID = ID for css in projects file
var projects = [
    {
        'bgImgID':`cover-project-PasswordGeneratorChromeExtension`,
        'gitURL':`https://github.com/itsraval/PasswordGeneratorChromeExtension`,
        'title':`Password Generator - Chrome Extension`,
        'description':`A lightweight Chrome extension that generates strong, customizable passwords completely local and privacy-friendly.`,
        'languages':`Javascript`,
        'date':`30/01/2026`
    },
    {
        'bgImgID':`cover-project-MHATOD`,
        'gitURL':`https://github.com/itsraval/MHATOD`,
        'title':`MHATOD`,
        'description':`Scripts that gather data regarding malware through searching online databases and third party libraries. <br><br> MSc dissertation in Advance Security & Digital Forensics: <a href="pdf/Behavioural Analysis of Current Evolution Ransomware Attack Exfiltration Methods.pdf" target="_blank" class="link">Behavioural Analysis of Current Evolution Ransomware Attack Exfiltration Methods</a>`,
        'languages':`Python | Javascript`,
        'date':`01/05/2024`
    },
    {
        'bgImgID':`cover-project-pswmSB`,
        'gitURL':`https://github.com/itsraval/passwordManagerSB`,
        'title':`Password Manager - SearchBar`,
        'description':`This is a local password manager search bar.<br> All data are stored locally. The app uses the hash PBKDF2-SHA256 and the cipher AES-GCM.`,
        'languages':`Python | Ahk`,
        'date':`28/03/2023`
    },
    {
        'bgImgID':`cover-project-a51`,
        'gitURL':`https://github.com/itsraval/A51-attack`,
        'title':`Attack on A5/1 cipher`,
        'description':`Implementation of the theoretical attack of Biham and Dunkelman, with the use of the techniques of the researcher Golic. <br><br>
            BSc dissertation in Computer Science (ITA only): <a href="pdf/Studio e analisi di cifrari utilizzati in ambito mobile.pdf" target="_blank" class="link">Studio e analisi di cifrari utilizzati in ambito mobile</a>`,
        'languages':`C | Batch`,
        'date':`05/03/2022`
    },
    {
        'bgImgID':`cover-project-xss`,
        'gitURL':`https://github.com/itsraval/XSS-Security`,
        'title':`XSS Security`,
        'description':`XSS webpage tester. <br>
            This webapp attacks the target address, checking if it has any XSS vulnerabilities and makes a downloadable report. <br>
            The report is a pdf that is generated with wkhtmltopdf.`,
        'languages':`Node.js | Express`,
        'date':`05/05/2021`
    },
    {
        'bgImgID':`cover-project-pmg`,
        'gitURL':`https://github.com/itsraval/passwordManagerGUI`,
        'title':`Password Manager GUI`,
        'description':`This is a local password manager with GUI. <br>
            All the data are stored ONLY on your own device. The app uses hash SHA256 and AES cipher. If someone will try to login he will be blocked and you can get an email notification.`,
        'languages':`Java | JavaFX`,
        'date':`24/01/2021`
    }]

function projectHTML(p){
    return `
    <div class="project-container">
        <div id="${p.bgImgID}" class="project-cover-container">
            <a href="${p.gitURL}" target="_blank">
                <img src="images/github.svg" class="github-project-link github-icon">
            </a>

            <div class="project-title-bar">
                <span>${p.title}</span>
            </div>
        </div>
        <div class="project-description-container">
            <div class="project-description">
                ${p.description}
            </div>
            <hr>
            <div class="project-infos">
                Languages: ${p.languages}<br>
                Date: ${p.date}
            </div>
        </div>
    </div>
    `
}

function emptyProjectHTML(p){
    return `
    <div class="project-container no-project">
        <div id="${p.bgImgID}" class="project-cover-container">
            <img src="images/github.svg" class="github-project-link github-icon">
            <div class="project-title-bar">
                <span>${p.title}</span>
            </div>
        </div>
        <div class="project-description-container">
            <div class="project-description">
                ${p.description}
            </div>
            <hr>
            <div class="project-infos">
                Languages: ${p.languages}<br>
                Date: ${p.date}
            </div>
        </div>
    </div>
    `
}

function row(firstRow){
    if (firstRow){
        r = `<div id="row1" class="row">`
    }else{
        r = `<div class="row">`
    }
    for (i=0; i<projects.length; i++){
        r += projectHTML(projects[i])
    }
    for (i=0; i<3;i++){
        r += emptyProjectHTML(emptyRow)
    }
    r += `</div>`
    return r
}

function buildDiv(){
    p = document.getElementById("projects")
    n = projects.length / 2

    p.innerHTML += row(true)
    r = row(false)
    for (i=1; i<n; i++){
        p.innerHTML += r
    }
}