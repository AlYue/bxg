/**
 * Created by ������������ on 2017/8/14.
 */
define(['jquery','cookie'],function($){
    $('#formLogin').submit(function(e){
        //��ȡ�������������
        var data = $(this).serialize();
        //��������
        $.ajax({
            //url:'http://api.botue.com/login',   //����ĵ�ַ
            url:'api/login',
            data:data,    //����ĵ�ַ
            type:'post',   //����ķ�ʽ
            success:function(result){
                //�������� ��cookie���浽����ҳ��ʹ��    ����ͬ������ cookie��Ϣ���Թ���
                //���յ������ַ�����Ȼ��ajax�Ѿ����ַ���תΪ����  cookie������ַ���
//                    var info = result.result;
                //������תΪ�ַ���
                //var info = JSON.stringify(result.result);
                //���ַ����浽cookie��   ��  ֵ
                $.cookie('tcInfo',JSON.stringify(result.result));
                //alert('��¼�ɹ�');
                location.href = '/';

            },
            error:function(result){
                alert('��¼ʧ��');
            }
        });


        //��ֹĬ����Ϊ
        return false;
    })
})
