interface TeamMemberProps {
  name: string
  role: string
  linkedIn?: string
  behance?: string
}

export function TeamMember({ name, role, linkedIn, behance }: TeamMemberProps) {
  return (
    <div className="text-amber-100 space-y-2">
      <div className="text-lg">
        <span className="font-medium">{name}</span>
        <span className="text-amber-300"> {`{`}</span>
      </div>
      <div className="pl-4 text-sm text-amber-200 leading-relaxed">{role}</div>
      {linkedIn && (
        <div className="pl-4">
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:text-blue-200 transition-colors"
          >
            linkedin
          </a>
        </div>
      )}
      {behance && (
        <div className="pl-4">
          <a
            href={behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-pink-300 hover:text-pink-200 transition-colors"
          >
            behance
          </a>
        </div>
      )}
      <div className="text-amber-300">{`}`}</div>
    </div>
  )
}
