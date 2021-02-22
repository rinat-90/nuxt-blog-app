export interface User {
  id: number,
  email: string
  name: string
  imgUrl: string
}

export interface Game {
  id: number,
  title: string,
  description: string,
  type: string,
  timeStart: string,
  timeEnd: string,
  spots: 10,
  skillLevel: string,
  location: string,
  imgUrl: string,
  date: string
  roaster: User[]
}
export interface Group {
  id: number,
  type: string,
  admins: User[],
  members: User[],
  events: [],
  title: string,
  description: string
  location: string,
  backgroundImg: string
  avatarImg: string

}
export interface Link {
  route: string,
  icon: string,
  title: string
}


