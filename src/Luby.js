class Luby {




  /*1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */
  Q1(qtd, val) {
    var arr = [];
    for (var i = 0; i < qtd; i++) {
      arr.push(val);
    }
    return arr;
  }

  /*2) Implemente um método que inverta um array, não utilize métodos nativos do 
  array.Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]*/
  Q2(arr1) {
    var arr2 = [];
    for (var i = arr1.length - 1; i >= 0; i--) {
      arr2.push(arr1[i]);
    }
    return arr2;
  }

  /*3) Implemente um método que limpe os itens desnecessários de um array (false, 
  undefined, strings vazias, zero, null).Entrada do método ([1,2,'', undefined]), 
  Resultado do método: [1,2]*/
  Q3(arr1) {
    var arr2 = arr1.filter(val => {
      return val != null && val != '';
    });
    return arr2;
  }
  /*4) Implemente um método que a partir de um array de arrays, converta em um 
  objeto com chave e valor.Entrada do método ([["c",2],["d",4]]), Resultado do 
  métdodo: {c:2, d:4}*/
  Q4(arr) {
    var obj = new Object();
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }


  /*5) Implemente um método que retorne um array, sem os itens passados por 
  parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), 
  Resultado do método: [4,2]*/
  Q5(arr1, ...args) {
    var arr2 = arr1.filter(function (val) {
      return args.indexOf(val) < 0;
    });
    return arr2;
  }

  /*6) Implemente um método que retorne um array, sem valores duplicados.
  Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]*/
  Q6(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr2.indexOf(arr[i]) == -1) { //se não tiver sido adicionado anteriormente 
        arr2.push(arr[i]);
      }
    }

    return arr2
  }

  /*7)Implemente um método que compare a igualdade de dois arrays e retorne um valor 
  booleano.Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true*/
  Q7(arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false;
    } else {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
          return false;
        }
      }
      return true;
    }
  }

  /*8) Implemente um método que remova os aninhamentos de um array de arrays para 
  um array unico.Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: 
  [1, 2, 3, 4, 5]*/
  Q8(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (var j = 0; j < arr[i].length; j++) {
          arr2.push(arr[i][j])
        }
      }else{
        arr2.push(arr[i])
      }
    }
    return arr2;
  }

  /*9) Implemente um método divida um array por uma quantidade passada por parâmetro.
  Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]*/
  Q9(arr, val) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i += val) {
      arr2.push(arr.slice(0 + i, 2 + i))
    }
    return arr2
  }

  /*10) Implemente um método que encontre os valores comuns entre dois arrays.
  Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]*/
  Q10(arr1, arr2) {
    var arr3 = arr1.filter(function (val) {
      return arr2.indexOf(val) >= 0;
    });
    return arr3;

  }
}

export default Luby;