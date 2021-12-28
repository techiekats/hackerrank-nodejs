class TrieNode {
    constructor () {
        this.node = {};
        this.isTerminalNode = false;
        this.childrenCount = 0;
    }
    addString  = function (arr) {
        if (arr.length == 0) {
            this.isTerminalNode = true;
        }
        else {
            let char = arr[0];    
            //NOTE: because no duplicates. else this condition does not hold.    
            this.childrenCount++;
            if (!this.node[char]) {
                this.node[char] = new TrieNode();            
            }
            this.node[char].addString(arr.slice(1));        
        }        
    }
    deleteString = function (str) {
        //TODO
    }
    searchString = function (str) {
        //TODO
    }
    getPartialStringCount = function (str) {  
        let char = str[0];
        if (!this.node[char]) 
        {
            return 0;
        }
        if (str.length == 1) 
        {
            return this.node[char].childrenCount;
        }
        return this.node[char].getPartialStringCount(str.slice(1));
    }
}

let t = new TrieNode();
//NOTE: send the split up chars so that at each level of recursion do not have to split string
t.addString('khyati'.split(''));
console.assert(t.getPartialStringCount('kha'.split('')) == 0);
console.assert(t.getPartialStringCount('kh'.split('')) == 1);
t.addString('aarna'.split(''));
t.addString('aadhya'.split(''));
console.assert(t.getPartialStringCount('a'.split('')) == 2);
console.assert(t.getPartialStringCount('aa'.split('')) == 2);
console.assert(t.getPartialStringCount('aar'.split('')) == 1);
/*add hack
add hackerrank
find hac
find hak*/

t.addString('hack'.split(''));
t.addString('hackerrank'.split(''));
console.assert(t.getPartialStringCount('hac') == 2);
console.assert(t.getPartialStringCount('hak') == 0)