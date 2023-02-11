function displayPerRow(n){
    rows = document.getElementsByClassName("row")
    if (n==1){
        for (i=1; i<rows.length; i++){
            rows[i].classList.add("hide")
        }
        projects = rows[0].getElementsByClassName("project-container")
        for (j=0; j<projects.length; j++){
            if (projects[j].classList.contains("no-project")){
                projects[j].classList.add("hide")
            }else{
                projects[j].classList.remove("hide")
            }
        }
    }else{
        for (i=0; i<rows.length; i++){
            r = rows[i]
            r.classList.remove("hide")
            countHide = 0
            projects = r.getElementsByClassName("project-container")
            for (j=0; j<projects.length; j++){
                projects[j].classList.remove("hide")
                if (j<i*n || j>=(i*n)+n){
                    projects[j].classList.add("hide")
                    if (!projects[j].classList.contains("no-project")){
                        countHide++
                    }
                }
            }
            if (countHide==projects.length-3){
                r.classList.add("hide")
            }
        } 
    }    
}

function setDisplay(width){
    if (width > 1700){
        displayPerRow(4)
    }else if(width > 1375){
        displayPerRow(3)
    }else if(width > 910){
        displayPerRow(2)
    }else{
        displayPerRow(1)
    }
}

var width = $(window).width();
$(window).on('resize', function() {
    if ($(this).width() !== width) {
        width = $(this).width()+10;
        setDisplay(width)
    }
});