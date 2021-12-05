/**
 * Inputs 
 */

const input1 = document.querySelector('#vendor_bills');
const input2 = document.querySelector('#medical_ad_spend');
const input3 = document.querySelector('#corp_spend');
const lastInput = document.querySelector('#team_project');


/**
 * Buttons container
 */

const brandButtonContainer = document.querySelector('#brand_btns__container');
const btns = brandButtonContainer.querySelectorAll('.btn')
const brexButton = document.querySelector('#brex');
const stripeButton = document.querySelector('#stripe');
const amexButton = document.querySelector('#amex');

/**
 * Result Containers
 */

const brandResultContainer = document.querySelector('#brand_result__container');
const brandNameText = document.querySelector('#brand_name');
const brandCalculatedResult = document.querySelector('#calculated_result');

const extraRewardsResultContainer = document.querySelector('#calculated_result_container');
const unlimitedProgress = document.querySelector('#unlimited_progress');
const lifeTimeProgress = document.querySelector('#lifetime_progress');
const unlimitedResult = document.querySelector('#unlimited_result');
const lifetimeResult = document.querySelector('#lifetime_result');

/***
  
 * Edit Functions
  
 */

 function thousandSplitter(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


/**
 * calculation Funactions
 */

 btns.forEach(function(button){
   button.addEventListener('click', function(e){
     e.preventDefault();
    //  brandResultContainer.classList.add('fadeOut')
     if(!input1.value || !input2.value || !input3.value || !lastInput.value){
       return alert('Please enter the rewards fields');
      }
    for(let i =0; i < this.parentElement.children.length; i++){
      console.log(this.parentElement.children[i].classList.remove('active'));
    }
    let sum = input1.value + input2.value + input3.value + lastInput.value;
    if(this === brexButton){
       this.classList.add('active');
       let brexResult = sum * 0.3;
       brandNameText.textContent = "Brex";
       brandCalculatedResult.textContent = `$${thousandSplitter(brexResult)}`;
     }
    if(this === stripeButton){
        this.classList.add('active');
        let stripeResult = sum * 2.9;
        brandNameText.textContent = "Stripe";
        brandCalculatedResult.textContent = `$${thousandSplitter(stripeResult)}`;
    }
    if(this === amexButton){
      this.classList.add('active');
      let amexResult = sum * 1.3;
      brandNameText.textContent = "Amex";
      brandCalculatedResult.textContent = `$${thousandSplitter(amexResult)}`;
  }
    brandResultContainer.classList.remove('fadeOut')
    brandResultContainer.classList.add('fadeIn')
   });
 })

 lastInput.addEventListener('focusout', function(e){
  if(!input1.value || !input2.value || !input3.value || !lastInput.value){
    return;
  }
  let sum = input1.value + input2.value + input3.value + lastInput.value;

  let unlimited = sum * 1.1;
  let lifetime = sum * 1.2;
  unlimitedResult.classList.add('fadeIn');
  lifetimeResult.classList.add('fadeIn');
  unlimitedResult.textContent = `$${thousandSplitter(unlimited)}`;
  lifetimeResult.textContent = `$${thousandSplitter(lifetime)}`;
 })


 /**
  * 
  * Widget Function
  * 
  */

 const calContainer = document.querySelector('#cal__container');
 const widgetContainer = document.querySelector('#widget_container');
 const widgetBtn = document.querySelector('#widget_btn');

 widgetBtn.addEventListener('click', function(e){
   e.preventDefault();
   this.classList.toggle('active')
   calContainer.classList.toggle('w_active');
 })

