// index.html の <head> タグが解釈されたタイミングで走破され、window.onload に処理が紐付けられる
window.onload = () => {
    let view = new MVVMSampleApp.IndexView();
    view.Bind();
};

namespace MVVMSampleApp{
    // View （ViewとViewModelを糊付けするクラス）
    export class IndexView {
        public ViewModel: IndexViewModel;
        public Bind() {
            this.ViewModel = new IndexViewModel();

            let h = document.getElementById("message1");


            let input = document.getElementById("input1") as HTMLInputElement;
            input.onchange = e => {
                this.ViewModel.InputValue = input.value;
            };


            let button1 = document.getElementById("button1");
            button1.onclick = e => {
                h.innerText = this.ViewModel.HelloAction();
            };
        }

    }

    // ViewModel （Viewを直接触らないスクリプト）
    export class IndexViewModel {
        public InputValue: string = "Hello MVVM!";
        public HelloAction() {
            return this.InputValue;
        }
    }
}

