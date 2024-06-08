import { create } from "zustand";
import { Item } from "@/types";
import { uuid } from "uuidv4";

const dummy_data: Item[] = [
  {
    id: uuid(),
    order: 1,
    title: "SegmentUI: Framer Component Library",
    url: "segentui.com",
    icon: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS81YmVhYjEyMzlhYzg4NDg3YzNhNjYwOGYvNjUyM2E2MTIxZjU4NzBlMTQ0NjU1YTM5X1dlYmNsaXAucG5n.png",
    thumbnail:
      "https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS81YmVhYjEyMzlhYzg4NDg3YzNhNjYwOGYvNjRiY2YzMTllM2RmMmRlZDVkMmJiMjAzX09wZW5HcmFwaC5qcGc=.jpeg?width=600&height=600",
    type: "Link",
    size: "2x1",
  },
  {
    id: uuid(),
    order: 2,
    title: "Daily Remix - Your daily dose of Framer things",
    url: "frameroverrides.com",
    icon: "https://storage.googleapis.com/creatorspace-public/sites%2Ffavicons%2FaHR0cHM6Ly9mcmFtZXJ1c2VyY29udGVudC5jb20vaW1hZ2VzL0xCYjRLbTkzWlFWcFdEODhobEVnTUdLVUVnLnN2Zw%3D%3D.svg",
    thumbnail:
      "https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9mcmFtZXJ1c2VyY29udGVudC5jb20vaW1hZ2VzL0RuczhPUHd0b1l4aXlrOWZWNktxR3NtOU9VLmpwZw==.jpeg?width=600&height=600",
    type: "Link",
    size: "2x1",
  },  
  {
    id: uuid(),
    order: 3,
    title: "Framer Community",
    url: "framer.commmunity",
    icon: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS81YmVhYjEyMzlhYzg4NDg3YzNhNjYwOGYvNjUyM2E2MTIxZjU4NzBlMTQ0NjU1YTM5X1dlYmNsaXAucG5n.png",
    thumbnail:
      "https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9kMnk1aDNvc3VtYm9heS5jbG91ZGZyb250Lm5ldC94emlnbm5qZTdxODlub3hlN3Ixa2Q4aDdjeHZ2.jpeg?width=600&height=600",
    type: "Link",
    size: "2x1",
  },
  {
    id: uuid(),
    order: 4,
    title: "403 Forbidden",
    url: "forbidden.com",
    type: "Link",
    size: "1x1",
  },
  {
    id: uuid(),
    order: 5,
    title: "403 Forbidden",
    url: "forbidden.com",
    type: "Link",
    size: "1x1",
  },

];

interface ItemListState {
  projects: Item[];
  addItem: (item: Item) => void;
  deleteItem: (item: Item) => void;
  modifyItem: (item: Item) => void;
  setProjects: (itemList: Item[]) => void;
}

export const useUserProfile = create<ItemListState>((set) => ({
  projects: [...(dummy_data.map((x,i) => ({...x,order:i+1})))],
  addItem: (item: Item) => {
    set((state: ItemListState) => ({
      projects: [
        ...state.projects,
        {
          id: uuid(),
          title: item.title,
          url: item.url,
          icon: item.icon,
          thumbnail: item.thumbnail,
          type: item.type,
          size: item.size,
        } as Item,
      ],
    }));
  },
  deleteItem: (item: Item) => {
    set((state: ItemListState) => {
      let projects = state.projects;
      projects.splice(item.order-1, 1);
      return ({
        projects: state.projects.map((x, i) => ({...x, order: i+1}))
      })
    })
  },
  modifyItem: (item: Item) => {
    set((state: ItemListState) => {
      let projects = state.projects;
      projects[item.order-1] = item;
      console.log(item.order-1)
      return ({
        projects
      })
    })
  },
  setProjects: (itemList) => {
    set((state: ItemListState) => ({
      projects: itemList.map((item, index) => ({ ...item, order: index + 1 })),
    }));
  },
}));
