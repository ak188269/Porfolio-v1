#include<bits/stdc++.h>
using namespace std;
int main(){
    // int arr[]={3,61,45,25,23};
    int arr[]={20,5,2,1,10};
    int n=sizeof(arr)/sizeof(int);
    for(int i=0;i<n;i++){
        int ele=arr[i];
        int j=0;
        while(ele>=arr[j] and j<n){
            // if(ele!=arr[j])
            cout<<"inside while first "<<i<<endl;
            if(j>0)
arr[j-1]=arr[j];
            j++;
        }
        if(j==0){
        // j=1;
        // cout<<"inside if second "<<i<<endl;
        int k=i;
        while(k>0){
    arr[k]=arr[k-1];
    k-=1;
        }
    arr[k]=ele;

        }
        else{
            // cout<<"inside else \n";
        arr[j-1]=ele;
        }
        
          for(int i=0;i<n;i++)
cout<<arr[i]<<" ";
cout<<endl;
    }

    // cout<<"checking";
    cout<<"using teamviewer";
    return 0;
}


