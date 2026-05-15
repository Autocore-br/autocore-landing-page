export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AutoCore: Sistemas de Gestão para Lojas de Autopeças
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Soluções completas de gestão de estoque, vendas, fornecedores,
              serviços e muito mais, desenvolvidas especialmente para as grandes
              redes de lojas de autopeças.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#features"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
              >
                Conheça Nossas Soluções
              </a>
              <a
                href="#contact"
                className="inline-block border border-blue-600 hover:border-blue-700 text-blue-600 hover:text-white hover:bg-blue-600 font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossas Soluções
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Plataforma integrada que automatiza e otimiza todos os processos
              essenciais da sua loja de autopeças.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Estoque */}
            <div className="bg-white p-8 rounded-lg shadow-hover border hover:border-blue-300 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Gestão de Estoque</h3>
                  <p className="mt-1 text-sm text-gray-500">Controle preciso em tempo real</p>
                </div>
              </div>
              <p className="text-gray-600">
                Controle avançado de inventário com alertas de reposição,
                gestão de validação, controle de lotes e validade, e integração
                com fornecedores para reposição automática.
              </p>
            </div>

            {/* Vendas */}
            <div className="bg-white p-8 rounded-lg shadow-hover border hover:border-blue-300 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-6 4a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Vendas e PDV</h3>
                  <p className="mt-1 text-sm text-gray-500">Fluxo de caixa otimizado</p>
                </div>
              </div>
              <p className="text-gray-600">
                Sistema completo de vendas com PDV integrado, controle de
                comissões, gestão de carteira de clientes, análise de
                performance e relatórios gerenciais em tempo real.
              </p>
            </div>

            {/* Fornecedores */}
            <div className="bg-white p-8 rounded-lg shadow-hover border hover:border-blue-300 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 10c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 8.5V20a2 2 0 002 2h16a2 2 0 002-2V8.5m-9 3h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Gestão de Fornecedores</h3>
                  <p className="mt-1 text-sm text-gray-500">Relacionamento fortalecido</p>
                </div>
              </div>
              <p className="text-gray-600">
                Cadastro completo de fornecedores, histórico de negociações,
                avaliação de performance, gestão de condições comerciais e
                automatização de pedidos baseado em níveis de estoque.
              </p>
            </div>

            {/* Serviços */}
            <div className="bg-white p-8 rounded-lg shadow-hover border hover:border-blue-300 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-6 4a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Gestão de Serviços</h3>
                  <p className="mt-1 text-sm text-gray-500">Oficina e serviços</p>
                </div>
              </div>
              <p className="text-gray-600">
                Controle completo de ordens de serviço, agendamento,
                gestão de mecânicos, controle de peças utilizadas,
                garantias e histórico de manutenção veicular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por que escolher o AutoCore?
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Nossa plataforma foi desenvolvida pensando nas necessidades
              específicas do setor de autopeças, trazendo resultados
              mensuráveis para o seu negócio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Benefit 1 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center border">
              <div className="bg-blue-100 p-4 rounded-lg mb-6 inline-block">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aumento de Eficiência</h3>
              <p className="text-gray-600">
                Reduza até 40% do tempo gasto em operações manuais e
                elimine erros de estoque e faturamento.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center border">
              <div className="bg-blue-100 p-4 rounded-lg mb-6 inline-block">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Melhoria na Margem</h3>
              <p className="text-gray-600">
                Otimize compras, reduza perdas por vencimento e aumente
                a rotatividade do estoque com inteligência de compra.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center border">
              <div className="bg-blue-100 p-4 rounded-lg mb-6 inline-block">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-.155-.002-.31-.01-.465z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Decisões Baseadas em Dados</h3>
              <p className="text-gray-600">
                Acesse relatórios gerenciais em tempo real, identificar
                oportunidades de venda e antecipar tendências do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-gradient-to-br from-blue-600 to-indigo-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua loja de autopeças?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Agende uma demonstração gratuita e descubra como o AutoCore pode
            aumentar sua eficiência operacional e lucratividade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contato@autocore.com.br"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Falar com Especialista
            </a>
            <a
              href="https://autocore.com.br/demo"
              className="inline-block border border-white hover:border-white/80 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Solicitar Demo Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2026 AutoCore - Sistemas de Gestão para Autopeças. Todos os direitos reservados.
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Suporte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
