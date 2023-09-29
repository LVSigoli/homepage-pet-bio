"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./equipe.css");
var react_1 = __importDefault(require("react"));
var react_collapsible_1 = __importDefault(require("react-collapsible"));
var header_1 = __importDefault(require("../../components/ui/Header/header"));
var useFetchEquipe_1 = __importDefault(require("../../hooks/fetch/useFetchEquipe"));
var CardTutor_1 = __importDefault(require("./SubComponentes/Card_Integrantes/CardTutor"));
var CardAluno_1 = __importDefault(require("./SubComponentes/Card_Integrantes/CardAluno"));
var CardExAlunos_1 = __importDefault(require("./SubComponentes/Card_Integrantes/CardExAlunos"));
var useCollapsibleOpen_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleOpen"));
var CardExTutores_1 = __importDefault(require("./SubComponentes/Card_Integrantes/CardExTutores"));
var menuNavegacao_1 = __importDefault(require("../../components/menus/MenuNavegacao/menuNavegacao"));
var useCollapsibleTrigger_1 = __importDefault(require("../../hooks/collapsible/useCollapsibleTrigger"));
function Equipe() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(menuNavegacao_1.default, null),
        react_1.default.createElement("div", { className: "equipe--corpo" },
            react_1.default.createElement(useFetchEquipe_1.default, { render: function (_a) {
                    var alunos = _a.alunos, tutores = _a.tutores, exAlunos = _a.exAlunos, exTutores = _a.exTutores;
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(header_1.default, { texto: "Integrantes" }),
                        react_1.default.createElement("section", { className: "equipe--tutor" }, tutores.map(function (tutor) { return (react_1.default.createElement(CardTutor_1.default, { key: tutor.id, github: tutor.github, nome: tutor.nome, tipo: tutor.tipo, srcFoto: tutor.srcFoto, ano: tutor.ano, linkedin: tutor.linkedin })); })),
                        react_1.default.createElement("section", { className: "equipe--alunos" }, alunos.map(function (aluno) { return (react_1.default.createElement(CardAluno_1.default, { key: aluno.id, nome: aluno.nome, srcFoto: aluno.srcFoto, tipo: aluno.tipo, ano: aluno.ano, github: aluno.github, linkedin: aluno.linkedin })); })),
                        react_1.default.createElement(react_collapsible_1.default, { classParentString: "EquipeCollapsible", trigger: react_1.default.createElement(useCollapsibleTrigger_1.default, { text: "Ex-Integrantes", page: "Equipe" }), triggerWhenOpen: react_1.default.createElement(useCollapsibleOpen_1.default, { text: "Ex-Integrantes", page: "Equipe" }) },
                            react_1.default.createElement("section", { className: "equipe--tutor" }, exTutores.map(function (exTutor) { return (react_1.default.createElement(CardExTutores_1.default, { key: exTutor.id, nome: exTutor.nome, srcFoto: exTutor.srcFoto, ano: exTutor.ano })); })),
                            react_1.default.createElement("section", { className: "equipe--alunos" }, exAlunos.map(function (exAluno) { return (react_1.default.createElement(CardExAlunos_1.default, { key: exAluno.id, nome: exAluno.nome, srcFoto: exAluno.srcFoto, linkedin: exAluno.linkedin })); })))));
                } }))));
}
exports.default = Equipe;
