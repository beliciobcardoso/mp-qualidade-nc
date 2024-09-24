import { Relatorio } from '@/lib/types'

const data: Relatorio[] = [
  {
    id: 1,
    nomeCliente: 'Cliente A',
    idSite: 'S001',
    altura: '10m',
    endereco: 'Rua A, 123',
    bairro: 'Centro',
    numero: '123',
    cidade: 'Cidade A',
    uf: 'UF1',
    tecnico: 'Tecnico A',
    dataServico: new Date('2023-01-01'),
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-02'),
    tipoSite: 'green field',
    tipoEstrutura: 'poste concreto',
  },
  {
    id: 2,
    nomeCliente: 'Cliente B',
    idSite: 'S002',
    altura: '15m',
    endereco: 'Avenida B, 456',
    bairro: 'Bairro B',
    numero: '456',
    cidade: 'Cidade B',
    uf: 'UF2',
    tecnico: 'Tecnico B',
    dataServico: new Date('2023-02-01'),
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-02-02'),
    finishedAt: new Date('2023-02-03'),
    tipoSite: 'roof top',
    tipoEstrutura: 'poste metalico',
  },
  {
    id: 3,
    nomeCliente: 'Cliente C',
    idSite: 'S003',
    altura: '20m',
    endereco: 'Travessa C, 789',
    bairro: 'Bairro C',
    numero: '789',
    cidade: 'Cidade C',
    uf: 'UF3',
    tecnico: 'Tecnico C',
    dataServico: new Date('2023-03-01'),
    createdAt: new Date('2023-03-03'),
    updatedAt: new Date('2023-03-03'),
    tipoSite: 'green field',
    tipoEstrutura: 'outros',
  },
  {
    id: 4,
    nomeCliente: 'Cliente D',
    idSite: 'S004',
    altura: '25m',
    endereco: 'Praça D, 1011',
    bairro: 'Bairro D',
    numero: '1011',
    cidade: 'Cidade D',
    uf: 'UF4',
    tecnico: 'Tecnico D',
    dataServico: new Date('2023-04-01'),
    createdAt: new Date('2023-04-01'),
    tipoSite: 'roof top',
    tipoEstrutura: 'torre metalica',
  },
]

export default data
