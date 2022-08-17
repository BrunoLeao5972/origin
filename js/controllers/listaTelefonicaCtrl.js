angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: $filter('uppercase') ("Bruno"), telefone: "98413-0948", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: $filter('uppercase') ("Isa"), telefone: "98431-6192", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}}, 
        {nome: $filter('uppercase') ("Wal"), telefone: "98537-8404", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}, 
        {nome: $filter('uppercase') ("Helder"), telefone: "99966-3826", data: new Date(), operadora: {nome: "Embratel", codigo: 21, categoria: "Celular"}},
        {nome: $filter('uppercase') ("Vanda"), telefone: "98671-0435", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}}
    ];
    $scope.operadoras = [
        {nome:"Oi", codigo: "14", categoria:"celular", preco: 2},
        {nome:"Vivo", codigo: "15", categoria:"celular", preco: 1},
        {nome:"Tim", codigo: "41", categoria:"celular", preco: 3},
        {nome:"GVT", codigo: "25", categoria:"Fixo", preco: 1},
        {nome:"Embratel", codigo: "21", categoria:"Fixo", preco: 2}
    ];

    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
       $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;        
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };    
});
