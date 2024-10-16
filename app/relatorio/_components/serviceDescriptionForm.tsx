'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { upsetDescriptionAnalisys } from '../actions'

const formSchema = z.object({
  services: z.string(),
  status: z.enum(['ok', 'na']),
})

type FormValues = z.infer<typeof formSchema>

export default function ServiceDescriptionForm({ id }: { id: number }) {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: '',
      status: 'ok',
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    const status = data.status.toString()
    // console.log(data.services)

    const datas = {
      idReport: id,
      services: data.services,
      status,
    }

    upsetDescriptionAnalisys(datas)
    router.refresh()
    form.reset()
  })

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <div className="">
            <div className="">
              <div className="grid grid-cols-[1fr_40px_50px]">
                <p className="">NOME DO SERVIÇO:</p>
                <p className="">OK</p>
                <p className="">N/A</p>
              </div>
            </div>
            <div className="w-full">
              {
                <div className="grid grid-cols-[1fr_100px] gap-2 justify-center items-center">
                  <div>
                    <FormField
                      control={form.control}
                      name="services"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="pl-4">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem className="space-y-3  w-full">
                          <FormControl className=" w-full">
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="ok" />
                                </FormControl>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="na" />
                                </FormControl>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="w-full flex justify-end p-4">
            <button
              type="submit"
              className="text-white bg-blue-500 px-4 py-1 rounded-lg"
            >
              Salvar
            </button>
          </div>
        </form>
      </Form>
    </div>
  )
}
