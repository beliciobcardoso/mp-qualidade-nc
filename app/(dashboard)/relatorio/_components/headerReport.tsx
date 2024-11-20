import ncLogo from '@/assets/ncLogo.png'
import { PhotoAnalisysType, Relatorio } from '@/lib/types'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import AproveReport from './aproveReport'
import { DialogServiceDescription } from './dialogServiceDescription'
import ModalAddCardPhoto from './modalAddCardPhoto'
import { RemoveServices } from './removerServices'

interface RelatorioHeaderProps {
  relatorioHeader: Relatorio
  descriptions: {
    id: number
    idReport: number
    service: string
    status: string
  }[]
  photoAnalisys: PhotoAnalisysType[]
  id: number
}

export default function HeaderReport({
  relatorioHeader,
  descriptions,
  photoAnalisys,
  id,
}: RelatorioHeaderProps) {
  return (
    <header className="flex flex-col bg-white">
      <div className="flex items-center justify-between">
        <div className="h-20 w-44 bg-slate-400">
          <Image
            src={ncLogo}
            alt="Logo"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="px-4 text-2xl font-bold">
          RELATÓRIO DE MANUTENÇÃO CORRETIVA
        </h1>
        <div className="h-20 w-44 bg-slate-400">
          <Image
            src={relatorioHeader.client.img ?? ncLogo}
            alt="LogoClient"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="bg-blue-500 p-2 text-center text-lg font-bold text-white">
          DADOS DO SITE
        </h1>
        <div className="text-sm">
          <div>
            <table className="border-1 w-full text-left">
              <tbody>
                <tr>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">ORIGINAL ID: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">ENDEREÇO: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">ALTURA: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">DATA DO SERVIÇO: </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.idSite.toUpperCase()}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.endereco.toUpperCase()}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.altura?.toUpperCase() ?? ''}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.dateService.toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-full border-2 text-left">
              <tbody>
                <tr>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">CIDADE: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">BAIRRO: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">NÚMERO: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">UF: </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.cidade.toUpperCase()}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.bairro.toUpperCase()}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.numero.toUpperCase()}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.uf.toUpperCase()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-full border-b-2 text-left">
              <tbody>
                <tr>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">TIPO DE SITE: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">TIPO DE ESTRUTURA: </span>
                  </td>
                  <td className="border-x-2 px-2">
                    <span className="font-bold">TÉCNICO: </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.siteType.name.toUpperCase()}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.sites.structureType.name.toUpperCase()}
                  </td>
                  <td className="border-x-2 px-2 text-right">
                    {relatorioHeader.technician.name.toUpperCase()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="w-4/5 px-2">Serviços</th>
              <th className="text-center">OK</th>
              <th className="text-center">NA</th>
            </tr>
          </thead>
          <tbody>
            {descriptions.length > 0 ? (
              descriptions.map((description, index) => (
                <tr key={index} className="border-2">
                  <td className="border-2 px-2">{description.service}</td>
                  <td className="border-2 text-center">
                    {description.status === 'ok' ? 'X' : ''}
                  </td>
                  <td className="border-2 text-center">
                    {description.status === 'na' ? 'X' : ''}
                  </td>
                  <td className="flex items-center justify-center">
                    {descriptions.length === 1 ? (
                      <p className="cursor-pointer rounded-sm bg-destructive bg-red-300 p-2 text-destructive-foreground text-white shadow-sm hover:bg-destructive/90">
                        Del
                      </p>
                    ) : (
                      <RemoveServices idService={description.id} />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="h-8 border-2 px-2"> </td>
                <td className="border-2 px-2 text-center"></td>
                <td className="border-2 px-2 text-center"></td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-end gap-2 p-2">
          {photoAnalisys.length > 4 ? (
            <AproveReport
              dialogButton={'Aprovar Relatório'}
              dialogTitle={'Aprovar Relatório'}
              dialogDescription={'Tela para aprovar um relatório'}
              idReport={id}
            />
          ) : (
            ''
          )}
          <DialogServiceDescription
            dialogButton={'Adicionar Serviço'}
            dialogDescription={'Adicione um novo serviço'}
            dialogTitle={'Adicionar Serviço'}
            idReport={id}
          />
          {descriptions.length > 0 ? (
            <ModalAddCardPhoto
              textButton={<PlusIcon className="h-6 w-6" />}
              textDescription={'Adicione uma nova foto'}
              textTitle={'Adicionar Foto'}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  )
}
