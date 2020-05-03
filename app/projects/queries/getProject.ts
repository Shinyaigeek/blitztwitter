import db, {FindOneProjectArgs} from 'db'

export default async function getProject(args: FindOneProjectArgs) {
  const project = await db.project.findOne(args)

  return project
}
