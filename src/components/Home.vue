<template>
<div>
<br>
    <h2>Banks Branch</h2>
    <div class="form--field">
        <label>Select State *</label>
        <select type="text" class="form--element" name="state" v-model="state" :option="states" placeholder="state"  @change="findLocation" required="">
            <option v-for="state in states" :key="state.text" :value="state.text" >{{state.text}}</option>
        </select>
    </div>
    <div class="form--field">
        <label>Select City *</label>
        <select type="text" class="form--element" name="city" v-model="city" :option="cities" placeholder="city"  @change="findLocation1" required="">
            <option v-for="city in cities" :key="city.text" :value="city.text" >{{city.text}}</option>
        </select>
    </div>
    
    <table>
      <thead>
        <tr>
            <th>Bank ID</th>
            <th>Bank Name</th>
            <th>Branch</th>
            <th>IFSC</th>
            <th>Address</th>
            <th>District</th>
            <th>City</th>
            <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(details,index) in bankdetails" :key="index">
            <td>{{details.bank_id}}</td>
            <td> <a href='#' @click="findbank(details.bank_id)">{{details.bank_name}}</a></td>
            <td>{{details.branch}}</td>
            <td> {{details.ifsc}}</td>
            <td>{{details.address}}</td>
            <td>{{details.city}}</td>
            <td>{{details.district}}</td>
            <td>{{details.state}}</td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
import Modal from "@melmacaluso/vue-modal";
import moment from 'moment'
const axios = require('axios');
import gggg from '@/components/global'

export default {
    data() {
        return {
            bankdetails:[],
            cities: [],
            cityName : [],
            states : [],
            statesName : [],
            city : '',
            c1 : '',
            state : '',
        }
    },
    mounted () { 
      this.statesName = ['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Delhi','Karnataka']
      for(var i=0;i<this.statesName.length;i++){
          this.states.push({text:this.statesName[i]})
      }
    },
    created(){   
    
    },
    methods: {
        findLocation(r){
          this.cities = []
          if(r.target.value == 'Andaman and Nicobar Islands'){
            this.cityName = ['Port Blair']
            for(var i=0;i<this.cityName.length;i++){
                this.cities.push({text:this.cityName[i]})
            }
          } else if(r.target.value =='Andhra Pradesh'){
            this.cityName = ['Visakhapatnam','Vijayawada','Guntur','Nellore','Kurnool','Rajahmundry','Kakinada','Tirupati','Anantapur','Kadapa','Vizianagaram','Eluru','Ongole','Nandyal','Machilipatnam','Adoni','Tenali','Chittoor','Hindupur','Proddatur','Bhimavaram','Madanapalle','Guntakal','Dharmavaram','Gudivada','Srikakulam','Narasaraopet','Rajampet','Tadpatri','Tadepalligudem','Chilakaluripet','Yemmiganur','Kadiri','Chirala','Anakapalle','Kavali','Palacole','Sullurpeta','Tanuku','Rayachoti','Srikalahasti','Bapatla','Naidupet','Nagari','Gudur','Vinukonda','Narasapuram','Nuzvid','Markapur','Ponnur','Kandukur','Bobbili','Rayadurg','Samalkot','Jaggaiahpet','Tuni','Amalapuram','Bheemunipatnam','Venkatagiri','Sattenapalle','Pithapuram','Palasa Kasibugga','Parvathipuram','Macherla','Gooty','Salur','Mandapeta','Jammalamadugu','Peddapuram','Punganur','Nidadavole','Repalle','Ramachandrapuram','Kovvur','Tiruvuru','Uravakonda','Narsipatnam','Yerraguntla','Pedana','Puttur','Renigunta','Rajam',]
            for(var i=0;i<this.cityName.length;i++){
                this.cities.push({text:this.cityName[i]})
            }
          } else if(r.target.value =='Arunachal Pradesh'){
            this.cityName = ['Naharlagun','Pasighat']
            for(var i=0;i<this.cityName.length;i++){
                this.cities.push({text:this.cityName[i]})
            }
          } else if(r.target.value =='Assam'){
            this.cityName = ['Guwahati','Silchar','Dibrugarh','Nagaon','Tinsukia','Jorhat','Bongaigaon City','Dhubri','Diphu','North Lakhimpur','Tezpur','Karimganj','Sibsagar','Goalpara','Barpeta','Lanka','Lumding','Mankachar','Nalbari','Rangia','Margherita','Mangaldoi','Silapathar','Mariani','Marigaon']
            for(var i=0;i<this.cityName.length;i++){
                this.cities.push({text:this.cityName[i]})
            } 
          } else if(r.target.value =='Bihar'){
            this.cityName = ['Patna','Gaya','Bhagalpur','Muzaffarpur','Darbhanga','Arrah','Begusarai','Chhapra','Katihar','Munger','Purnia','Saharsa','Sasaram','Hajipur','Bettiah','Motihari','Bagaha','Siwan','Kishanganj','Jamalpur','Buxar','Jehanabad','Aurangabad','Lakhisarai','Nawada','Jamui','Sitamarhi','Araria','Gopalganj','Madhubani','Masaurhi','Samastipur','Mokameh','Supaul','Dumraon','Arwal','Forbesganj','Narkatiaganj','Naugachhia','Madhepura','Sheikhpura','Sultanganj','Ramnagar','Warisaliganj','Revelganj','Rajgir','Sonepur','Sherghati','Sugauli','Makhdumpur','Maner','Rosera','Nokha','Piro','Rafiganj','Marhaura','Mirganj','Lalganj','Murliganj','Motipur','Manihari','Sheohar','Maharajganj','Silao','Barh','Asarganj']
            for(var i=0;i<this.cityName.length;i++){
                this.cities.push({text:this.cityName[i]})
            } 
          } else if(r.target.value =='Delhi'){
            this.cityName = ['Delhi','New Delhi']
            for(var i=0;i<this.cityName.length;i++){
                this.cities.push({text:this.cityName[i]})
            } 
          } else if(r.target.value =='Karnataka'){
            this.cityName = ['Bengaluru','Hubli','Dharwad','Belagavi','Mangaluru','Davanagere','Ballari','Mysore','Tumkur','Shivamogga','Raayachuru','Kolar','Mandya','Udupi','Chikkamagaluru','Karwar','Ranebennuru','Ranibennur','Ramanagaram','Gokak','Yadgir','Shahabad','Sirsi','Sindhnur','Tiptur','Arsikere','Nanjangud','Sagara','Sira','Puttur','Athni','Mulbagal','Surapura','Siruguppa','Mudhol','Sidlaghatta','Shahpur','Wadi','Manvi','Nelamangala','Lakshmeshwar','Ramdurg','Nargund','Tarikere','Malavalli','Savanur','Lingsugur','Vijayapura','Sankeshwara','Madikeri','Talikota','Sedam','Shikaripur','Mahalingapura','Mudalagi','Muddebihal','Pavagada','Malur','Sindhagi','Sanduru','Afzalpur','Maddur','Madhugiri','Tekkalakote','Terdal','Mudabidri','Magadi','Navalgund','Shiggaon','Shrirangapattana','Sindagi','Sakaleshapura','Srinivaspur','Ron','Mundargi','Sadalagi','Piriyapatna','Adyar']
            for(var i=0;i<this.cityName.length;i++){
                this.cities.push({text:this.cityName[i]})
            } 
          }
        },
        findLocation1(x){
          var str = x.target.value;
          var res = str.toUpperCase();
          this.c1 = res
          gggg.get('/banks',{params: { city: this.c1 } }).then(response => {
            this.bankdetails = response.data
          })
        },
        findbank(g){
          this.$router.push('/bank/'+g)
        }
    }
}
</script>
<style>
body {
  padding: 0px;
  text-align: center;
}

table {
  width: 100%;
  table-layout: fixed;
}
table,
td,
th {
  border-collapse: collapse;
  padding: 5px;
  border: solid 1px;
  text-align: center;
  table-layout: fixed;
}
.form--field {
  width: 100%;
  height: 100%;
  text-align : left;
  margin: 20px 10px;
}
.form--element {
  background-color: rgb(250, 249, 249);       
  border: 1px solid rgb(252, 249, 249);
  border-radius: 3px;
  font-size: 14px;
  line-height: 28px;
  padding: 0 4px;
  color: rgb(7, 7, 7);
  width: 10%;
  margin: 4px 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
</style>

