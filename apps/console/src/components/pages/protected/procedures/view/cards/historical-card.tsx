'use client'

import React from 'react'
import { ProcedureByIdFragment, User } from '@repo/codegen/src/schema'
import { Card } from '@repo/ui/cardpanel'
import { CalendarCheck2, CalendarClock, UserRoundCheck, UserRoundPen } from 'lucide-react'
import { useGetCurrentUser } from '@/lib/graphql-hooks/user.ts'
import { Avatar } from '@/components/shared/avatar/avatar.tsx'
import { formatTimeSince } from '@/utils/date'

type TPropertiesCardProps = {
  procedure: ProcedureByIdFragment
}

const PropertiesCard: React.FC<TPropertiesCardProps> = ({ procedure }) => {
  const { data: createdByUser } = useGetCurrentUser(procedure.createdBy)
  const { data: updatedByUser } = useGetCurrentUser(procedure.updatedBy)

  return (
    <Card className="p-4">
      <h3 className="text-lg font-medium mb-2">Historical</h3>
      <div className="flex flex-col gap-4">
        {/* Created By */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-[160px] items-center">
            <UserRoundCheck size={16} className="text-brand" />
            <span>Created By</span>
          </div>

          <div className="w-[220px]">
            <div className="flex gap-2">
              <Avatar entity={createdByUser?.user! as User} variant="small" />
              <span>{createdByUser?.user?.displayName}</span>
            </div>
          </div>
        </div>

        {/* Created At */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-[160px] items-center">
            <CalendarCheck2 size={16} className="text-brand" />
            <span>Created At</span>
          </div>

          <div className="w-[220px]">
            <div className="flex gap-2">
              <span>{formatTimeSince(procedure.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* Created By */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-[160px] items-center">
            <UserRoundPen size={16} className="text-brand" />
            <span>Updated By</span>
          </div>

          <div className="w-[220px]">
            <div className="flex gap-2">
              <Avatar entity={updatedByUser?.user! as User} variant="small" />
              <span>{updatedByUser?.user?.displayName}</span>
            </div>
          </div>
        </div>

        {/* Updated At */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-[160px] items-center">
            <CalendarClock size={16} className="text-brand" />
            <span>Updated At</span>
          </div>

          <div className="w-[220px]">
            <div className="flex gap-2">
              <span>{formatTimeSince(procedure.updatedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PropertiesCard
