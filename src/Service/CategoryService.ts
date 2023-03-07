import {ICategory} from "../Interface";
import {ObjectId, WithId} from "mongodb";
import {CategoryModel} from "../Model";


export class CategoryService {
   
    async createCategory(category: ICategory){
         const newCategoryId: ObjectId = await new CategoryModel().createCategory(category);
        return newCategoryId.toHexString() ;
    }
    async getAllCategory(){
        const categories: ICategory[] = await new CategoryModel().getAllCategory();
       return  categories;
   }
   async getCategoryById(categoryId:ObjectId){
    const category: ICategory = await new CategoryModel().getCategoryById(categoryId);
   return  category;
   }
   async getCategoryProducts(Category_name:string){
    const category: ICategory = await new CategoryModel().getCategoryProducts(Category_name);
   return  category;
   }

}