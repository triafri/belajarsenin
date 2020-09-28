import React, {Component} from 'react';

class Registrasi extends Component{

    constructor(props){
        super(props)
        this.state={
            judul:'Contoh Judul',
            contohPerubahan:'Judul yang akan diubah',
            valueFirst:'',
            valueLast:'',
            valueAlamat:'',
            valueKodePos:''
        }
        this.ubahState=this.ubahState.bind(this)
    }

// Care reguler
//     ubahState(namaValue, e){
//         e.preventDefault()
//        this.setState({[namaValue]:e.target.value})
//     }

//Cara Asynchronus
    ubahState(namaValue, e){
        e.preventDefault()
        var tampungData = e.target.value
        this.setState(function(state,props){
            return{
                [namaValue]:tampungData
            }
        })
    }
    
    // ubahStateA(e){
    //     e.preventDefault()
    //    this.setState({value2:e.target.value})
    // }

    // ubahStateB(e){
    //     e.preventDefault()
    //    this.setState({value3:e.target.value})
    // }

    // ubahStateC(e){
    //     e.preventDefault()
    //    this.setState({value4:e.target.value})
    // }

//perubahan state secara reguler
       //this.setState({judul: 'Merubah Judul secara reguler'})
       //this.setState{(judul:this.state.contohPerubahan)} kalau melibatkan state dan props tidak boleh ditulis seperti ini

//perubahan state secara assynchronus di tulis dengan cara arrow function
        //  this.setState((state, props)=>({
        //     judul:'Merubah juduk secara arrow function'
        //     judul:this.state.contohPerubahan
        //  }))

//perubahan state secara asyonchronus di tulis secara reguler function
        // this.setState(function(State, props){
        //     return{
        //         judul:this.state.contohPerubahan
        //         judul:'Merubah Judul Asynchrones secara reguler function'
        //     }
        // })

    render(){
        return(
            <div>
                    <h5>First Name</h5>
                    {
                        //<button type="button" onClick={this.ubahState}>KLik Untuk Berubah</button>
                        //<input onChange={this.ubahState}/>
                    }
                     <p>{this.state.valueFirst}</p>
                    <input value={this.state.valueFisrt} onChange={(e)=>this.ubahState("valueFirst", e)}/>
                    <h5>======================================================</h5>

                    <h5>Last Name</h5>
                    <p>{this.state.valueLast}</p>
                    <input value={this.state.valueLast} onChange={(e)=>this.ubahState("valueLast",e)}/>
                    <h5>======================================================</h5>

                    <h5>Alamat</h5>
                    <p>{this.state.valueAlamat}</p>
                    <input value={this.state.valueAlamat} onChange={(e)=>this.ubahState("valueAlamat", e)}/>
                    <h5>======================================================</h5>

                    <h5>Kode Pos</h5>
                    <p>{this.state.valueKodePos}</p>
                    <input value={this.state.valueKodePos} onChange={(e)=>this.ubahState("valueKodePos", e)}/>
                    <h5>======================================================</h5>
            </div>

        )
    }
}

export default Registrasi