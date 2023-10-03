'use client';

import { Combobox } from '@/components/ui/combobox';
import { data } from '@/libs/lorem';
import { cn } from '@/libs/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

const steeps = {
  1: [45, 31, 18, 0],
  2: [60, 42, 24, 0],
  3: [60, 42, 24, 0],
  4: [40, 28, 16, 0],
  5: [95, 67, 38, 0],
  6: [50, 35, 20, 0],
  7: [50, 35, 20, 0],
  isf: [9, 7, 4, 0],
};

const colors: { [key: number]: string } = {
  3: 'text-red-700',
  2: 'text-yellow-700',
  1: 'text-green-700',
  0: 'text-blue-700',
};

function getColor(steeps: number[], value: number): string {
  const index = steeps.findIndex((steep) => value >= steep);

  return colors[index];
}

const ufs = [
  { value: 'all', label: 'TODOS' },
  { value: 'PE', label: 'PERNAMBUCO' },
];

const cities = [
  {
    value: 'all',
    label: 'TODOS',
  },
  {
    value: '260515',
    label: 'DORMENTES',
  },
  {
    value: '260340',
    label: 'CALUMBI',
  },
  {
    value: '261280',
    label: 'SANTA TEREZINHA',
  },
  {
    value: '260910',
    label: 'MACHADOS',
  },
  {
    value: '261400',
    label: 'SERRITA',
  },
  {
    value: '261330',
    label: 'SAO JOAQUIM DO MONTE',
  },
  {
    value: '260310',
    label: 'CACHOEIRINHA',
  },
  {
    value: '260150',
    label: 'BELEM DE MARIA',
  },
  {
    value: '260380',
    label: 'CAPOEIRAS',
  },
  {
    value: '260020',
    label: 'AFRANIO',
  },
  {
    value: '261440',
    label: 'SOLIDAO',
  },
  {
    value: '260825',
    label: 'JUCATI',
  },
  {
    value: '260350',
    label: 'CAMOCIM DE SAO FELIX',
  },
  {
    value: '260650',
    label: 'IATI',
  },
  {
    value: '261510',
    label: 'TEREZINHA',
  },
  {
    value: '260860',
    label: 'LAGOA DO OURO',
  },
  {
    value: '260320',
    label: 'CAETES',
  },
  {
    value: '260580',
    label: 'FREI MIGUELINHO',
  },
  {
    value: '260670',
    label: 'IBIRAJUBA',
  },
  {
    value: '261245',
    label: 'SANTA CRUZ',
  },
  {
    value: '260770',
    label: 'ITAPETIM',
  },
  {
    value: '260070',
    label: 'ALIANCA',
  },
  {
    value: '260250',
    label: 'BREJINHO',
  },
  {
    value: '261300',
    label: 'SAO BENTO DO UNA',
  },
  {
    value: '261320',
    label: 'SAO JOAO',
  },
  {
    value: '261470',
    label: 'TACAIMBO',
  },
  {
    value: '260795',
    label: 'JAQUEIRA',
  },
  {
    value: '260710',
    label: 'INGAZEIRA',
  },
  {
    value: '260830',
    label: 'JUPI',
  },
  {
    value: '261618',
    label: 'VERTENTE DO LERIO',
  },
  {
    value: '261050',
    label: 'PASSIRA',
  },
  {
    value: '261590',
    label: 'TUPARETAMA',
  },
  {
    value: '260240',
    label: 'BREJAO',
  },
  {
    value: '260750',
    label: 'ITAIBA',
  },
  {
    value: '261380',
    label: 'SAO VICENTE FERRER',
  },
  {
    value: '260080',
    label: 'ALTINHO',
  },
  {
    value: '260330',
    label: 'CALCADO',
  },
  {
    value: '261360',
    label: 'SAO JOSE DO EGITO',
  },
  {
    value: '261100',
    label: 'PETROLANDIA',
  },
  {
    value: '261153',
    label: 'QUIXABA',
  },
  {
    value: '261010',
    label: 'PALMEIRINA',
  },
  {
    value: '260010',
    label: 'AFOGADOS DA INGAZEIRA',
  },
  {
    value: '260100',
    label: 'ANGELIM',
  },
  {
    value: '261520',
    label: 'TERRA NOVA',
  },
  {
    value: '260780',
    label: 'ITAQUITINGA',
  },
  {
    value: '260740',
    label: 'ITACURUBA',
  },
  {
    value: '261430',
    label: 'MOREILANDIA',
  },
  {
    value: '261020',
    label: 'PANELAS',
  },
  {
    value: '260180',
    label: 'BETANIA',
  },
  {
    value: '260230',
    label: 'BONITO',
  },
  {
    value: '261340',
    label: 'SAO JOSE DA COROA GRANDE',
  },
  {
    value: '260560',
    label: 'FLORES',
  },
  {
    value: '260430',
    label: 'CEDRO',
  },
  {
    value: '260390',
    label: 'CARNAIBA',
  },
  {
    value: '260805',
    label: 'JATOBA',
  },
  {
    value: '261030',
    label: 'PARANATAMA',
  },
  {
    value: '260620',
    label: 'GOIANA',
  },
  {
    value: '261120',
    label: 'POCAO',
  },
  {
    value: '260530',
    label: 'EXU',
  },
  {
    value: '261480',
    label: 'TACARATU',
  },
  {
    value: '261230',
    label: 'SALOA',
  },
  {
    value: '260890',
    label: 'LIMOEIRO',
  },
  {
    value: '260370',
    label: 'CANHOTINHO',
  },
  {
    value: '260460',
    label: 'CONDADO',
  },
  {
    value: '261610',
    label: 'VERDEJANTE',
  },
  {
    value: '261370',
    label: 'SAO LOURENCO DA MATA',
  },
  {
    value: '260800',
    label: 'JATAUBA',
  },
  {
    value: '260415',
    label: 'CASINHAS',
  },
  {
    value: '261210',
    label: 'SALGADINHO',
  },
  {
    value: '261450',
    label: 'SURUBIM',
  },
  {
    value: '260880',
    label: 'LAJEDO',
  },
  {
    value: '260900',
    label: 'MACAPARANA',
  },
  {
    value: '260550',
    label: 'FERREIROS',
  },
  {
    value: '260690',
    label: 'IGUARACY',
  },
  {
    value: '260140',
    label: 'BARREIROS',
  },
  {
    value: '261040',
    label: 'PARNAMIRIM',
  },
  {
    value: '260870',
    label: 'LAGOA DOS GATOS',
  },
  {
    value: '261000',
    label: 'PALMARES',
  },
  {
    value: '260470',
    label: 'CORRENTES',
  },
  {
    value: '261220',
    label: 'SALGUEIRO',
  },
  {
    value: '261240',
    label: 'SANHARO',
  },
  {
    value: '260280',
    label: 'BUIQUE',
  },
  {
    value: '260220',
    label: 'BOM JARDIM',
  },
  {
    value: '260130',
    label: 'BARRA DE GUABIRABA',
  },
  {
    value: '261150',
    label: 'QUIPAPA',
  },
  {
    value: '260060',
    label: 'ALAGOINHA',
  },
  {
    value: '261570',
    label: 'TRIUNFO',
  },
  {
    value: '261560',
    label: 'TRINDADE',
  },
  {
    value: '261310',
    label: 'SAO CAITANO',
  },
  {
    value: '261255',
    label: 'SANTA FILOMENA',
  },
  {
    value: '261420',
    label: 'SIRINHAEM',
  },
  {
    value: '261390',
    label: 'SERRA TALHADA',
  },
  {
    value: '260765',
    label: 'ITAMBE',
  },
  {
    value: '260105',
    label: 'ARACOIABA',
  },
  {
    value: '260540',
    label: 'FEIRA NOVA',
  },
  {
    value: '261530',
    label: 'TIMBAUBA',
  },
  {
    value: '261170',
    label: 'RIACHO DAS ALMAS',
  },
  {
    value: '261140',
    label: 'PRIMAVERA',
  },
  {
    value: '260545',
    label: 'FERNANDO DE NORONHA',
  },
  {
    value: '261247',
    label: 'SANTA CRUZ DA BAIXA VERDE',
  },
  {
    value: '260700',
    label: 'INAJA',
  },
  {
    value: '260200',
    label: 'BODOCO',
  },
  {
    value: '261090',
    label: 'PESQUEIRA',
  },
  {
    value: '261460',
    label: 'TABIRA',
  },
  {
    value: '260500',
    label: 'CUPIRA',
  },
  {
    value: '260730',
    label: 'IPUBI',
  },
  {
    value: '261540',
    label: 'TORITAMA',
  },
  {
    value: '261260',
    label: 'SANTA MARIA DA BOA VISTA',
  },
  {
    value: '260970',
    label: 'OROBO',
  },
  {
    value: '260360',
    label: 'CAMUTANGA',
  },
  {
    value: '260170',
    label: 'BELO JARDIM',
  },
  {
    value: '261130',
    label: 'POMBOS',
  },
  {
    value: '260915',
    label: 'MANARI',
  },
  {
    value: '260120',
    label: 'ARCOVERDE',
  },
  {
    value: '260920',
    label: 'MARAIAL',
  },
  {
    value: '261060',
    label: 'PAUDALHO',
  },
  {
    value: '260600',
    label: 'GARANHUNS',
  },
  {
    value: '261600',
    label: 'VENTUROSA',
  },
  {
    value: '261580',
    label: 'TUPANATINGA',
  },
  {
    value: '261410',
    label: 'SERTANIA',
  },
  {
    value: '260930',
    label: 'MIRANDIBA',
  },
  {
    value: '260210',
    label: 'BOM CONSELHO',
  },
  {
    value: '260110',
    label: 'ARARIPINA',
  },
  {
    value: '260845',
    label: 'LAGOA DO CARRO',
  },
  {
    value: '260410',
    label: 'CARUARU',
  },
  {
    value: '260850',
    label: 'LAGOA DE ITAENGA',
  },
  {
    value: '261290',
    label: 'SAO BENEDITO DO SUL',
  },
  {
    value: '261270',
    label: 'SANTA MARIA DO CAMBUCA',
  },
  {
    value: '260820',
    label: 'JOAQUIM NABUCO',
  },
  {
    value: '260810',
    label: 'JOAO ALFREDO',
  },
  {
    value: '260660',
    label: 'IBIMIRIM',
  },
  {
    value: '261630',
    label: 'VICENCIA',
  },
  {
    value: '260570',
    label: 'FLORESTA',
  },
  {
    value: '261080',
    label: 'PEDRA',
  },
  {
    value: '260590',
    label: 'GAMELEIRA',
  },
  {
    value: '260270',
    label: 'BUENOS AIRES',
  },
  {
    value: '260875',
    label: 'LAGOA GRANDE',
  },
  {
    value: '260630',
    label: 'GRANITO',
  },
  {
    value: '260005',
    label: 'ABREU E LIMA',
  },
  {
    value: '260300',
    label: 'CABROBO',
  },
  {
    value: '260840',
    label: 'JUREMA',
  },
  {
    value: '260510',
    label: 'CUSTODIA',
  },
  {
    value: '260640',
    label: 'GRAVATA',
  },
  {
    value: '260400',
    label: 'CARPINA',
  },
  {
    value: '260090',
    label: 'AMARAJI',
  },
  {
    value: '261350',
    label: 'SAO JOSE DO BELMONTE',
  },
  {
    value: '260680',
    label: 'IGARASSU',
  },
  {
    value: '261190',
    label: 'RIO FORMOSO',
  },
  {
    value: '260950',
    label: 'NAZARE DA MATA',
  },
  {
    value: '260392',
    label: 'CARNAUBEIRA DA PENHA',
  },
  {
    value: '260940',
    label: 'MORENO',
  },
  {
    value: '260030',
    label: 'AGRESTINA',
  },
  {
    value: '260290',
    label: 'CABO DE SANTO AGOSTINHO',
  },
  {
    value: '260440',
    label: 'CHA DE ALEGRIA',
  },
  {
    value: '260980',
    label: 'OROCO',
  },
  {
    value: '261200',
    label: 'SAIRE',
  },
  {
    value: '261250',
    label: 'SANTA CRUZ DO CAPIBARIBE',
  },
  {
    value: '260040',
    label: 'AGUA PRETA',
  },
  {
    value: '261485',
    label: 'TAMANDARE',
  },
  {
    value: '260775',
    label: 'ITAPISSUMA',
  },
  {
    value: '260050',
    label: 'AGUAS BELAS',
  },
  {
    value: '261110',
    label: 'PETROLINA',
  },
  {
    value: '261500',
    label: 'TAQUARITINGA DO NORTE',
  },
  {
    value: '260610',
    label: 'GLORIA DO GOITA',
  },
  {
    value: '260720',
    label: 'IPOJUCA',
  },
  {
    value: '261650',
    label: 'XEXEU',
  },
  {
    value: '260260',
    label: 'BREJO DA MADRE DE DEUS',
  },
  {
    value: '260990',
    label: 'OURICURI',
  },
  {
    value: '260420',
    label: 'CATENDE',
  },
  {
    value: '260190',
    label: 'BEZERROS',
  },
  {
    value: '261550',
    label: 'TRACUNHAEM',
  },
  {
    value: '260450',
    label: 'CHA GRANDE',
  },
  {
    value: '261180',
    label: 'RIBEIRAO',
  },
  {
    value: '260490',
    label: 'CUMARU',
  },
  {
    value: '261640',
    label: 'VITORIA DE SANTO ANTAO',
  },
  {
    value: '261160',
    label: 'RECIFE',
  },
  {
    value: '260160',
    label: 'BELEM DO SAO FRANCISCO',
  },
  {
    value: '260345',
    label: 'CAMARAGIBE',
  },
  {
    value: '260960',
    label: 'OLINDA',
  },
  {
    value: '260480',
    label: 'CORTES',
  },
  {
    value: '261620',
    label: 'VERTENTES',
  },
  {
    value: '260790',
    label: 'JABOATAO DOS GUARARAPES',
  },
  {
    value: '260520',
    label: 'ESCADA',
  },
  {
    value: '260760',
    label: 'ILHA DE ITAMARACA',
  },
  {
    value: '261070',
    label: 'PAULISTA',
  },
];

const Home: React.FC = () => {
  const [uf, setUf] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-16 bg-background">
      <img
        src="https://www.vivver.com.br/wp-content/uploads/2020/04/previne_brasil_financiamento-e1587127996885.jpg"
        className="w-full max-w-md mx-auto"
      />

      <div className="flex gap-4 mx-auto mt-16 max-w-7xl">
        <div className="flex flex-col">
          <span>Estado</span>
          <Combobox onChange={setUf} options={ufs} placeholder="Selecionar estado" value={uf} />
        </div>
        <div className="flex flex-col">
          <span>Município</span>
          <Combobox
            onChange={setCity}
            options={cities}
            placeholder="Selecionar estado"
            value={city}
          />
        </div>
      </div>

      <ol className="flex flex-col gap-2 mx-auto mt-16 max-w-7xl">
        <li className="px-4 py-2 text-secondary-foreground/70">
          <span>#</span>
          <span>IBGE</span>
          <span>Município</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>I1</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pré-Natal (6 consultas)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>I2</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pré-Natal (Sífilis e HIV)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>I3</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gestantes Saúde Bucal</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>I4</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cobertura Citopatológico</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>I5</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cobertura Polio e Penta</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>I6</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hipertensão (PA Aferida)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>I7</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Diabetes (Hemoglobina Glicada)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span>ISF</span>
          <span>Recurso</span>
        </li>

        {data.map((result) => {
          return (
            <li key={result.ibge} className="px-4 py-2 rounded-lg bg-secondary">
              <span>{result.position}</span>
              <span>{result.ibge}</span>
              <div className={cn('flex items-center gap-2', { 'font-medium': result.isPartner })}>
                <span>{result.name + ' - ' + result.uf}</span>
                {result.isPartner && <img className="w-6 h-6" src="/favicon.ico" />}
              </div>
              <span className={getColor(steeps[1], result.indicators[0])}>
                {result.indicators[0]}%
              </span>
              <span className={getColor(steeps[2], result.indicators[1])}>
                {result.indicators[1]}%
              </span>
              <span className={getColor(steeps[3], result.indicators[2])}>
                {result.indicators[2]}%
              </span>
              <span className={getColor(steeps[4], result.indicators[3])}>
                {result.indicators[3]}%
              </span>
              <span className={getColor(steeps[5], result.indicators[4])}>
                {result.indicators[4]}%
              </span>
              <span className={getColor(steeps[6], result.indicators[5])}>
                {result.indicators[5]}%
              </span>
              <span className={getColor(steeps[7], result.indicators[6])}>
                {result.indicators[6]}%
              </span>
              <span className={getColor(steeps['isf'], result.isf)}>{result.isf}</span>
              <span>{result.resource}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Home;
