async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");  //array of bar elements
    for(let i = 0; i < ele.length-1; i++){ //for iterarating thorugh ele as iterating over number
        console.log(`In ${i} loop`);
        for(let j = 0; j < ele.length-i-1; j++){
            console.log(`In ${j} loop`);
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);//position change here we are only swapping the size the bars are at same place only there dimension changes (not a normal swap )
            }
            ele[j].style.background = 'cyan';//temporary sorted bubbled out
            ele[j+1].style.background = 'cyan';//temporary sorted bubbled out
        }
        ele[ele.length-1-i].style.background = 'green';//final when that element is fixed
    }
    ele[0].style.background = 'green';//explicitly covers first element
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
