const Ector = require('ector')
const Quote = require("eddy-malou")

const EddyArray = []

module.exports = class Eddy{


	constructor(data){
		this._name;
		this._owner;
		this._lexic;
		this.load(data)
		EddyArray.push(this)
	}


	set data(data={}){
		this.ector = new Ector()
		this.name(data.name||"Eddy Malou")
		this.owner(data.owner||"Maître")
		this.lexic(Array.isArray(data.lexic)?data.lexic||[])
		return this
	}
	get data(){
		return {
			name : this._name,
			owner : this._owner,
			lexic : this._lexic
		}
	}


	set name(newName){
		this.ector.setName(newName)
		this._name = newName
	}
	set owner(newOwner){
		this.ector.setUser(newOwner)
		this._owner = newOwner
	}
	set lexic(newLexique){
		this.ector = new Ector(this._name,this._owner)
		this._lexic = newLexique
		this._lexic.forEach(entry=>{
			this.ector.addEntry(entry)
		})
	}
	set input(newEntry){
		if(this._lexic.every(entry=>{
			return !entry.toLowerCase().includes(newEntry.toLowerCase())
		})){
			this._lexic.push(newEntry)
			this.ector.addEntry(newEntry)
		}
	}


	get name(){
		return this._name
	}
	get owner(){
		return this._owner
	}
	get lexic(){
		return this._lexic
	}
	get output(){
		return Math.random() > .01 ? this.ector.generateResponse().sentence : Quote.congolexicomatisation() ;
	}


	remove(text){
		this.lexic(this._lexic.filter(entry=>{
			return entry.toLowerCase() !== text.toLowerCase()
		}))
		return this
	}
	removeAll(text){
		this.lexic(this._lexic.filter(entry=>{
			return !entry.toLowerCase().includes(text.toLowerCase())
		}))
		return this
	}
	reset(){
		this.lexic([])
		return this
	}
	fusion(eddy){
		this.lexic(
			this._lexic.concat(
				eddy.lexic.filter(entry=>{
					return this._lexic.every(entry2=>{
						return entry2.toLowerCase() !== entry.toLowerCase()
					})
				})
			)
		)
		return this
	}

	static get quote(){
		return Quote.congolexicomatisation()
	}
	static get all(){
		return EddyArray
	}
	static get ector(){
		return Ector
	}
}
