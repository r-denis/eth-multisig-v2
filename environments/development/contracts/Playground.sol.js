// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"s","type":"bytes"}],"name":"getSha3","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"signature","type":"bytes"}],"name":"verifySignature","outputs":[{"name":"retAddr","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a033216600090815260208190526040902061271090556102978061002f6000396000f3606060405260e060020a6000350463746c181b811461003c57806390b98a1114610107578063daca6f7814610136578063f8b2cb4f1461019b575b005b6040805160206004803580820135601f81018490048402850184019095528484526101b79491936024939092918401919081908401838280828437509496505050505050506000600060007343989fb883ba8111221e89123897538475893837915061271090508181856040518084600160a060020a03166c010000000000000000000000000281526014018381526020018280519060200190808383829060006004602084601f0104600302600f01f1509050019350505050604051809103902092505050919050565b6101c960043560243533600160a060020a0316600090815260208190526040812054829010156101fa5761022c565b60408051602060248035600481810135601f81018590048502860185019096528585526101dd9581359591946044949293909201918190840183828082843750949650505050505050600060006000600084516041141515610232576000935061028e565b600160a060020a03600435166000908152602081905260409020545b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b50506040805160208581015186840151604188015189855260ff168484018190528486018390526060850182905294519195509392600192608082810193919282900301816000866161da5a03f1156100025750506040515193505b5050509291505056",
    unlinked_binary: "6060604052600160a060020a033216600090815260208190526040902061271090556102978061002f6000396000f3606060405260e060020a6000350463746c181b811461003c57806390b98a1114610107578063daca6f7814610136578063f8b2cb4f1461019b575b005b6040805160206004803580820135601f81018490048402850184019095528484526101b79491936024939092918401919081908401838280828437509496505050505050506000600060007343989fb883ba8111221e89123897538475893837915061271090508181856040518084600160a060020a03166c010000000000000000000000000281526014018381526020018280519060200190808383829060006004602084601f0104600302600f01f1509050019350505050604051809103902092505050919050565b6101c960043560243533600160a060020a0316600090815260208190526040812054829010156101fa5761022c565b60408051602060248035600481810135601f81018590048502860185019096528585526101dd9581359591946044949293909201918190840183828082843750949650505050505050600060006000600084516041141515610232576000935061028e565b600160a060020a03600435166000908152602081905260409020545b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b50506040805160208581015186840151604188015189855260ff168484018190528486018390526060850182905294519195509392600192608082810193919282900301816000866161da5a03f1156100025750506040515193505b5050509291505056",
    address: "0xb0a079242d230997b7385a9266e6d715f61bea78",
    generated_with: "2.0.9",
    contract_name: "Playground"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Playground error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Playground error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Playground error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Playground error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Playground = Contract;
  }

})();