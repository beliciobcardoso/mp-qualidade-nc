import { DialogReport } from './_components/dialogReport'

export default function Report() {
  return (
    <div className="flex justify-around">
      <DialogReport
        dialogButton={'Criar Relatório'}
        dialogTitle={'Criar Relatório'}
        dialogDescription={'Tela para criar um novo relatório'}
      />
      <DialogReport
        dialogButton={'Editar Relatório'}
        dialogTitle={'Editar Relatório'}
        dialogDescription={'Tela para editar um relatório'}
        dialogPerson={{
          nome: 'Belicio',
          email: 'bello@example.com',
          cargo: 'Analista de TI',
        }}
      />
    </div>
  )
}
