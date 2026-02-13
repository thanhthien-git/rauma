'use client'

import { FormGender } from './account-gender-form'
import { ProfileImageField } from './account-image-form'
import { FormFieldItem } from './account-normal-form'

export function AccountFormLayout({ control }: { control: any }) {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4">
      <div>
        <FormFieldItem control={control} name="firstName" label="First Name" placeholder="John" />
      </div>

      <div className="col-start-1 row-start-2">
        <FormFieldItem control={control} name="lastName" label="Last Name" placeholder="Doe" />
      </div>

      <div className="col-start-1 row-start-3">
        <FormFieldItem
          control={control}
          name="email"
          label="Email"
          placeholder="john.doe@example.com"
          type="email"
        />
      </div>

      <div className="col-start-2 row-start-1">
        <FormFieldItem
          control={control}
          name="phone"
          label="Phone"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="row-span-2 col-start-2 row-start-2 ">
        <ProfileImageField control={control} />
      </div>

      <div className="row-start-4">
        <FormGender control={control} />
      </div>

      <div className="row-start-4">
        <FormFieldItem control={control} name="bod" label="Date of Birth" type="date" />
      </div>
    </div>
  )
}
