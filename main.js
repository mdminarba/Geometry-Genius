function CalculateTriangleArea() {
    const baseFiled = document.getElementById('Triangle-base');
    const baseVelueText = baseFiled.value;
    const base = parseFloat(baseVelueText);
    console.log(base)

    const hightFiled = document.getElementById('Triangle-hight');
    const hightTextValue = hightFiled.value;
    const hight = parseFloat(hightTextValue);
    console.log(hight)


    const area = 0.5 * base * hight;
    console.log(area)

    const areaFiled = document.getElementById('Triangle-area');
    areaFiled.innerText = area; 
}

function rectanglecalculateArea() {
    const widthFiled = document.getElementById('width-area');
    const widthAreaText = widthFiled.value;
    const width = parseFloat(widthAreaText);
    console.log( width)

    const lenthFiled = document.getElementById('lenth-area');
    const lenthAreaText = lenthFiled.value;
    const lenth = parseFloat(lenthAreaText);
    console.log(lenth);

    const totalArea = width * lenth ;

    const areaSow = document.getElementById('rectangle-area');
    areaSow .innerText = totalArea;
    
}

function parallelogramCalculateArea() {
    const parallelFiled = document.getElementById('parallel-area');
    const parallelAreaText = parallelFiled.value;
    const parallel = parseFloat(parallelAreaText);
    console.log(parallel)

    const hightparallelFiled = document.getElementById('hightpara-area');
    const hightparaAreaText = hightparallelFiled.value;
    const hightpara = parseFloat(hightparaAreaText);
    console.log(hightpara);

    const totalparallelareaSowArea = hightpara * parallel ;

    const parallelareaSow = document.getElementById('parallelogram-area');
    parallelareaSow.innerText = totalparallelareaSowArea;
    
}