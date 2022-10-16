class JobList{
    constructor(jobTitle,employeeName,telNumber){
        this.jobTitle = jobTitle;
        this.employeeName = employeeName;
        this.telNumber = telNumber
    }
}

class UI{
    // List Add
    addJobList(list){
        const DOMList = document.getElementById('job-list');
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${list.jobTitle}</td>
            <td>${list.employeeName}</td>
            <td>${list.telNumber}</td>
            <td><button class="delete"></button></td>
            <td><i class="icon"></i></td>
        `;
        DOMList.appendChild(tr);
    }
    //List Delete
    deleteList(target){
        if(target.className ==='delete'){
            target.parentElement.parentElement.remove();
            const ui = new UI;
            ui.showAlert('Kayıt Başarıyla silindi','success')
        }
    }
    //Show Alert
    showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message))

        const row = document.querySelector('.form-row')
        const form = document.getElementById('form-job');
        row.insertBefore(div,form);

        setTimeout(()=> {
            document.querySelector('.alert').remove();
        },3000)
    }
    //clear List
    clearList(){
        document.getElementById('title').value='';
        document.getElementById('employee').value='';
        document.getElementById('telNumber').value='';
    }
    //done list
    doneList(target){
        if(target.className === 'icon'){
            target.parentElement.parentElement.classList.toggle('line-through')
            target.classList.add('check')
        }     
    }

}

//form event

document.getElementById('form-job').addEventListener('submit', function(e){
    e.preventDefault();
    const jobTitle = document.getElementById('title').value;
    const employeeName= document.getElementById('employee').value;
    const telNumber = document.getElementById('telNumber').value;

    const list = new JobList(jobTitle,employeeName,telNumber);
    const ui = new UI();

    if(jobTitle==='' || employeeName === '' || telNumber === ''){
        ui.showAlert('Boş alanları doldurunuz', 'danger')
    }
    else{
        ui.addJobList(list)
        ui.showAlert('Kayıt Başarıyla Eklediniz', 'success')
        ui.clearList()
    }
})

// event delete & done
document.getElementById('job-list').addEventListener('click', function(e){
    e.preventDefault();
     const ui = new UI;
     ui.deleteList(e.target)
    ui.doneList(e.target)
})

