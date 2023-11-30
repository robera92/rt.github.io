const form = ()=>{

    return`
    <div class="alert alert-warning d-none" role="alert">
    </div>
    <div class="form-group">
        <input class="form-control term" type="text" placeholder="Jusu adresas">
    </div>
    <div class="form-group">
        <input class="form-control city" type="text" placeholder="Jusu miestas">
    </div>
    <div class="form-group">
        <input class="form-control result d-none" type="text" readonly>
    </div>
    <div class="form-group">
        <button class="btn btn-primary" type="submit">Ieskoti</button>
    </div>
    `

}

export default form;